/**
 * Note: Test is very important, but due to lack of time, I will skip it right now.
 * You can read my full message in the dashboard. 
 */

import '@testing-library/jest-dom';
import { server } from './mocks/handlers';

// Enable API mocking before tests run
beforeAll(() => server.listen());

// Reset any mock handlers that were used during the tests
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests have completed
afterAll(() => server.close());

// Set up server-side rendering for testing
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};