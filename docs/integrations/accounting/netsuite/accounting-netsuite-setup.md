---
title: "Set up the Oracle NetSuite integration"
description: "Explore our API integration with Oracle NetSuite"
sidebar_label: Setup
---

Oracle NetSuite is an online service that enables companies to manage all key business processes, in a single system.

Before you can access data from your clients using Oracle NetSuite for their accounting, you need to set up an Oracle NetSuite integration in the Codat Portal. You'll need to:

- Enable your Oracle NetSuite integration in the Codat Portal.
- Set up your client as a company and send them the Link URL to access their accounting data.

## Configure the Oracle NetSuite integration

Oracle NetSuite does not require any global credentials for accessing the API. Instead, your clients will be asked to install a [bundle](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_N3363483.html#SuiteBundler-Overview) containing configuration for the Codat integration. Specifically, the bundle contains a script that is used to get or update certain types of data (e.g. attachments) and an integration record to enable the linking process. When linking, if the company has not yet installed the bundle, it will be redirected to a page containing information about the installation process.

To install bundles on their account, the company must have the Administrator role or the relevant permission to allow bundle installation.

:::note Unmanaged bundles

Codat's bundles are referred to as unmanaged bundles in Oracle NetSuite. This means that with any potential bundle updates in the future, you will have to let your clients know that they will have to upgrade their bundles to the new version individually on their accounts.
:::

1. Log in to the [Codat Portal](https://app.codat.io).
2. On the navigation bar, select **Settings > Integrations > Accounting**.
3. Find **Oracle NetSuite** then select **Set up** to view the **Integration settings** page.
4. Choose what type of access to company data you want to have for this integration: one-off or continuous. For help, see [Sync settings](/core-concepts/data-type-settings).
5. Click **Save**.

## Enable the Oracle NetSuite integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Accounting integrations**</a> page.
2. Locate **Oracle NetSuite** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Set up a company for your client

You can set up a company that represents your SMB customer in one of two ways:

1. In the [Codat Portal](http://app.codat.io), navigate to **Companies > Add new company**, enter a name for your client's company and select **Add**. This approach might be especially useful when you are testing your solution during build.
2. Make a call to our API using the [Create company](/platform-api#/operations/create-company) endpoint, passing the company's `name` and `description` as parameters.

In both cases, you will receive a Link URL in response. Send this to your client so that they can log in to their Oracle NetSuite account to confirm the connection. They will need to **Allow** the Link App to access Oracle NetSuite data and then choose the **Production** account.
