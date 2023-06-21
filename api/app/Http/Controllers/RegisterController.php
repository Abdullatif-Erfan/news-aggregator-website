<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{

    /**
     * Description:     add a new user
     * HTTP Method:     POST
     * URL:             http://127.0.0.1:8000/api/register
     * @Param:          {form-fields}: {{name: string, email: string, password: string}}
     * @Returns:        {object}: returns a success or error message
     */
    public function register(Request $request)
    {
        // Define your validation rules
        $rules = [
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
        ];

        // Run the validation
        $validator = Validator::make($request->all(), $rules);

        // If validation fails, return an error response in JSON format
        if ($validator->fails()) {
            return response()->json([
                'status' => 404,
                'message' => $validator->errors()->first(),
            ], 404);
        }

        $user =new User();
        $user->name =$request->name;
        $user->email=$request->email;
        $user->password=Hash::make($request->password);
         try
        {
            $user->save();
            return response()->json(array('status' => 201, 'message' => 'User Successfully Registered'));
        }
        catch(Exception $e)
        {
            return response()->json(array('status' => 409, 'message' => ' Conflicted '.$e->getMessage()));
        }
    }
     

    /**
     * Description:     Login with credentials
     * HTTP Method:     POST
     * URL:             http://127.0.0.1:8000/api/login
     * @Param:          {form-fields}: {{email: string, password: string}}
     * @Returns:        {object}: returns a success or error message
     */
    public function login(Request $request)
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['success' =>false,
              'message'=>'Incorrect Credentials'],Response::HTTP_UNAUTHORIZED);
        }

        $user=auth::User();
        $tokens = $user->createToken('Token')->plainTextToken;
        // $cookie = Cookie::make('mycookie', 'myvalue', 60, '/', 'example.com', false, false);
        $cookie=cookie('jwt',$tokens,60*24,'/','localhost',false,false);

        return response([
            'success'=>true,
            'message'=>"Successfully Logged In",
            'token'=>$tokens,
            'name'=>$user->name,
        ])->withCookie($cookie);
    }

     /**
     * Description:     Get Authenticated user
     * HTTP Method:     GET
     * URL:             http://127.0.0.1:8000/api/user
     * @Param:          {cookie}
     * @Returns:        {object}: returns user record
     */
    public function user()
    {
        // Get the authenticated user
        $user = Auth::user();
        // Check if the user is authenticated
        if (Auth::check()) {
            return $user;
        } else {
            return response()->json(array('status' => 404, 'message' => 'unAuthenticated User'));
        }
    }

    /**
     * Description:     Logout
     * HTTP Method:     POST
     * URL:             http://127.0.0.1:8000/api/logout
     * @Param:          {cookie}
     * @Returns:        {object}: returns a success message
     */
    public function logout()
    {
        $cookie=Cookie::forget('jwt');
        return response([
           'message'=>'success'
        ])->withCookie($cookie);
    }
}
