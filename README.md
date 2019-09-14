This sample project is designed to assess your front-end development capabilities.

The goal of this project is to build a simple "changelog notifier" app that notifies a user of new features. For a point of reference, check out https://headwayapp.co

## Requirements:
- The changelog itself should be a markdown file that lives on GitHub as a Gist (the format should look something like this: https://gist.github.com/dte/701da5c596c0df267500bedffb66d5f8

- This file will be consumed by the sample app through whatever method you choose (cURL, API, other standard library). The file is then displayed to the user as a modal when the user clicks the notification icon on their avatar.

How you structure/implement this project is largely up to you, but it is required that you use React and a simple web server such as Express. Frameworks such as Next.js / Gatsby.js, etc are allowed.

## Bonus points
- use cookies to know when a user has already been notified about a release. i.e. don't show "2 new alerts" if the user has read them already
- add unit tests to confirm the expected behavior
- add smooth transition effects when clicking the release notes to go to an "expanded" view. See video here for an example: