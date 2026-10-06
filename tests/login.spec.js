import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login - Tekus', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLogin();
    await loginPage.login('qatester', 'N9j^u9&Hm@dz2Kcs');
    await expect(page).toHaveURL(/.*dashboard|.*home|.*inicio/);
  });
});
