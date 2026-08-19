# Billing

Status: active

## Purpose

How an invoice total is computed.

## Invariants

- A total is the sum of price times quantity over every line item.
- A total is rounded to two decimal places, half up.
- An invoice belongs to exactly one account, and the deployment serves one
  account, so no account identifier is stored on the invoice.
