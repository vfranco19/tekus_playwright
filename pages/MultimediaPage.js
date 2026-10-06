import { BasePage } from './BasePage';

export class MultimediaPage extends BasePage {
  constructor(page) {
    super(page);
    this.fileSize = page.locator('text=Peso del archivo').locator('..').locator('.value, td:nth-child(2), .text-right');
    this.uniqueId = page.locator('text=Identificador único').locator('..').locator('.value, td:nth-child(2)');
    this.description = page.locator('text=Descripción').locator('..').locator('.value, td:nth-child(2), .description');
    this.preview = page.locator('.preview, img[src*="preview"], video, .media-preview');
  }

  async gotoMultimedia() {
    await this.goto('/screens/multimedia');
  }

  async getFileSize() {
    if (await this.fileSize.count() > 0) {
      return await this.fileSize.first().textContent();
    }
    return null;
  }

  async getUniqueId() {
    if (await this.uniqueId.count() > 0) {
      return await this.uniqueId.first().textContent();
    }
    return null;
  }

  async getDescription() {
    if (await this.description.count() > 0) {
      return await this.description.first().textContent();
    }
    return null;
  }

  async hasPreview() {
    if (await this.preview.count() > 0) {
      return await this.preview.first().isVisible();
    }
    return false;
  }
}
