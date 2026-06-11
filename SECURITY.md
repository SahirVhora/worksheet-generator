# Security Policy

## Supported Versions

This project is actively maintained. Security updates are applied to the latest release.

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly.

**DO NOT** open a public GitHub issue for security vulnerabilities.

### How to Report

1. **Email**: Send details to [security@sahirvhora.com](mailto:security@sahirvhora.com)
2. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- **Acknowledgment**: Within 48 hours
- **Initial assessment**: Within 1 week
- **Fix timeline**: Depends on severity
  - Critical: 24-48 hours
  - High: 1 week
  - Medium: 2 weeks
  - Low: Next release cycle

### Disclosure Policy

- Vulnerabilities will be disclosed publicly after a fix is available
- Credit will be given to reporters (unless anonymity requested)
- Coordinated disclosure preferred

## Security Best Practices

This project follows security best practices:

- Dependencies are monitored via Dependabot
- No secrets or credentials in source code
- Input validation on all user-facing endpoints
- HTTPS enforced for all web services
- Regular security audits

## Security Updates

Security updates are released as patch versions. Subscribe to releases to stay informed.

## License

This security policy is part of the project's MIT license.

Worksheet Generator is a browser-only app. If AI mode is enabled, requests are sent directly from the browser to Anthropic using the user's own API key.

## API Keys

- Do not hard-code Anthropic API keys in `index.html`, `quiz.html`, screenshots, issues, or pull requests.
- Browser `localStorage` is convenient for personal use, but it is not a secure shared-device secret store.
- Rotate any key that is accidentally exposed.

## Child Privacy

- Avoid entering children's full names, school names, addresses, or other identifying details.
- Review AI-generated worksheets before using them with children or sharing them publicly.
- Free Mode is the safest option for shared devices because it does not require an API key.
