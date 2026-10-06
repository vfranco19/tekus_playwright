import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MultimediaPage } from '../pages/MultimediaPage';

test.describe('Multimedia - Tekus', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLogin();
    await loginPage.login('qatester', 'N9j^u9&Hm@dz2Kcs');
    await expect(page).toHaveURL(/.*dashboard|.*home|.*inicio/);
  });

  test('should navigate to multimedia and validate content elements', async ({ page }) => {
    const multimediaPage = new MultimediaPage(page);
    await multimediaPage.gotoMultimedia();
    await expect(page).toHaveURL(/.*screens\/multimedia/);

    const fileSize = await multimediaPage.getFileSize();
    const uniqueId = await multimediaPage.getUniqueId();
    const description = await multimediaPage.getDescription();
    const hasPreview = await multimediaPage.hasPreview();

    expect(fileSize).not.toBeNull();
    expect(uniqueId).not.toBeNull();
    expect(description).not.toBeNull();
    expect(hasPreview).toBeTruthy();
  });
});
