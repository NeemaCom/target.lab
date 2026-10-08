---
name: GitHub authorization
description: Distinguishing GitHub App API access from native Git source-control authorization.
---

A healthy GitHub App API connection does not establish that native Git push authentication works.

**Why:** In this workspace, repository API reads worked while native Git push rejected its credentials. The native source-control connection reported healthy, but the integration reconnect cards could not handle its connection identifier.

**How to apply:** Verify native Git authentication separately. If native connection recovery cards fail, consult current Replit documentation and direct the user to reconnect GitHub under account settings → Git Providers, rather than treating the App connection as a replacement.
