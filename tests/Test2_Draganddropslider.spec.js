import { test, expect } from '@playwright/test';
import { Draganddropslider, DragDropSliderPage } from '../pages/Draganddropslider';

test('Drag & Drop Slider Test', async ({ page }) => {
  const sliderPage = new Draganddropslider(page);
  await sliderPage.navigate();

  await expect(sliderPage.slider).toBeVisible();
  await sliderPage.setSliderTo();
  const value = await sliderPage.getSliderValue();
  expect(value).toBe('95');
});
