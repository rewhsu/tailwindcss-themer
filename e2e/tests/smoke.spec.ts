import { expect } from '@playwright/test'
import { test } from '../test_repos/test'

test('displays the default theme by default', async ({ page, testRepo }) => {
  await testRepo.openWithConfig({
    defaultTheme: {
      extend: {
        colors: {
          primary: 'blue'
        }
      }
    },
    themes: [
      {
        name: 'darkTheme',
        extend: {
          colors: {
            primary: {
              500: 'red'
            }
          }
        }
      }
    ]
  })

  await expect(page).toHaveScreenshot()
})

test('displays the dark theme when enabled', async ({ page, testRepo }) => {
  await testRepo.openWithConfig({
    defaultTheme: {
      extend: {
        colors: {
          primary: 'blue'
        }
      }
    },
    themes: [
      {
        name: 'darkTheme',
        extend: {
          colors: {
            primary: 'red'
          }
        }
      }
    ]
  })

  await testRepo.setClassOnRoot('darkTheme')

  await expect(page).toHaveScreenshot()
})
