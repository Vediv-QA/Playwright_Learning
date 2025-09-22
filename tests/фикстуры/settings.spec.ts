import { test as base, expect, Page } from '@playwright/test';

interface SettingsFixtures {
  configuredSettings: Page;
}

// Нужно реализовать фукстуру configuredSettings
// Отркрыть страницу https://osstep.github.io/fixture_settings
// Выбрать темную тему
// Активировать опцию пуш-нотификации
// Нажать кнопку Сохранить

export const test = base.extend<SettingsFixtures>({
  configuredSettings: async ({ page }, use) => {},
});

test('Settings are persisted', async ({ configuredSettings }) => {
  const settings = await configuredSettings.evaluate(() => {
    const userSettings = localStorage.getItem('userSettings');
    if (typeof userSettings === 'string') return JSON.parse(userSettings);
  });

  expect(settings).toEqual({
    accentColor: 'purple',
    emailNotifications: true,
    pushNotifications: true,
    theme: 'dark',
  });
  await expect(configuredSettings.locator('#save-status')).toBeVisible();
  await expect(configuredSettings.locator('#theme')).toHaveValue('dark');
  await expect(configuredSettings.locator('div:nth-child(3) > .switch > .slider')).toBeChecked();
});
