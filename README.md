# About skeleton-navigation-typescript-kendo-bundled

## Introduction

This document serves as a companion to **[KendoUI Bridge Documentation](https://aurelia-ui-toolkits.gitbooks.io/kendoui-bridge-docs/content/)** - chapters:

- **[esnext-kendo](https://aurelia-ui-toolkits.gitbooks.io/kendoui-bridge-docs/content/developers-tutorials/42_skeleton_esnext.html)**
- **[Bundling details](https://aurelia-ui-toolkits.gitbooks.io/kendoui-bridge-docs/content/bd-notes/on_bundling.html)**
- **[Bundling step by step instructions](https://aurelia-ui-toolkits.gitbooks.io/kendoui-bridge-docs/content/app_developers_notes/bundlingstep_by_step_instructions_md.html)**

Each of these documents references to this article as well.

***

## How to build the current release (September 2017)

The most recent release of the skeleton typescript app is 1.2.2 available as zip file **[here](https://github.com/aurelia/skeleton-navigation/archive/1.1.2.zip)**. Unlike most other libraries, Aurelia ships each component of the framework as a module, so the way to fetch all needed type files is a bit more convoluted that doing the same for other libraries shipped as a single module. At the moment Aurelia skeleton typescript app defines its requirements for type definition files in the file **`typings.json`**, which exists at the application's root level (see Image 1 below):

<p align=center>
<img src="https://user-images.githubusercontent.com/2712405/29881939-9fddd300-8d79-11e7-88d5-42143ce354bb.png"></img>
<br><br>
Image 1
</p>

The content of this file defined by the green rectangle needs to be removed in order to correctly generate the Typsecript type definition files - process that takes place while executing the command **`npm install`**. As **[this line](https://github.com/aurelia-tools/atb-samples/blob/master/skeleton-typescript/package.json#L24)** indicates **`npm`** will run the command **`typings install`** before any other actions it takes.

Running **`typings install`** (note that **`typings`** is a locally installed command line tool) reads the file **`typings.json`** (which we just edited to remove the **`globalDependencies`** section, that is not needed any more) and creates the new "run time" folder **`typings`** shown below:

<p align=center>
<img src="https://user-images.githubusercontent.com/2712405/29883337-fdcc105e-8d7d-11e7-8079-b5135f03191f.png"></img>
<br><br>
Image 2
</p>

**Note:** The attribute "run time" applied to the folder object indicates that the information in that folder is typically not persisted in the related git repository.

***

## Aurelia Typescript and KendoUI bridge

This section mostly follows the **[typescript-kendo](https://aurelia-ui-toolkits.gitbooks.io/kendoui-bridge-docs/content/developers-tutorials/44_typescript.html)** tutorial, which is a part of the **[Aurelia KendoUI Bridge Catalog application's Documentation](http://aurelia-ui-toolkits.github.io/demo-kendo/#/documentation)** section. Instead of providing references to the **[Installation chapter](https://www.gitbook.com/book/aurelia-ui-toolkits/kendo-ui-sdk-installation)** of that same Catalog application, we will instead describe the **[skeleton-typescript-kendo](https://github.com/aurelia-tools/atb-samples/tree/master/skeleton-typescript-kendo)** which is a part of the **[set of samples](https://github.com/aurelia-tools/atb-samples)**, associated with this book.

Unlike the situation in the **[typescript-kendo](https://aurelia-ui-toolkits.gitbooks.io/kendoui-bridge-docs/content/developers-tutorials/44_typescript.html)** tutorial, this **[skeleton-typescript-kendo](https://github.com/aurelia-tools/atb-samples/tree/master/skeleton-typescript-kendo)** follows the (slightly modified) **[installation of KendoUI PRO](https://aurelia-ui-toolkits.gitbooks.io/kendo-ui-sdk-installation/content/installation/installing%20kendo/advanced/pro/jspm/downloaded_zip.html)**. So, we are starting with copy of the already described **[skeleton-typescript](https://github.com/aurelia-tools/atb-samples/tree/master/skeleton-typescript)** sample, further augmented with a few additions:

1. KendoUI SDK is in the **[kendo-sdk](https://github.com/aurelia-tools/atb-samples/tree/master/skeleton-typescript-kendo/kendo-sdk)** folder.

1. The command

    ```
    jspm install css aurelia-kendoui-bridge
    ```
    was run already (note the absence of the `kendo-ui` item, since this **[SDK](https://github.com/aurelia-ui-toolkits/skeleton-navigation-typescript-kendo-bundled/tree/master/kendo-sdk)** is already a part of this application.

1. The just installed kendo-ui-bridge is **[activated](https://github.com/aurelia-tools/atb-samples/blob/master/skeleton-typescript-kendo/src/main.ts#L8)** in the **[`main.ts`](https://github.com/aurelia-tools/atb-samples/blob/master/skeleton-typescript-kendo/src/main.ts)** class

1. A new KendoUI Bridge component **[`Autocomplete`](http://aurelia-ui-toolkits.github.io/demo-kendo/#/samples/autocomplete-basic-use)** is added (**[`autocomplete.html`](https://github.com/aurelia-tools/atb-samples/blob/master/skeleton-typescript-kendo/src/autocomplete.html)**, **[`autocomplete.ts`](https://github.com/aurelia-tools/atb-samples/blob/master/skeleton-typescript-kendo/src/autocomplete.ts)** and **[`autocomplete.css`](https://github.com/aurelia-tools/atb-samples/blob/master/skeleton-typescript-kendo/src/autocomplete.css)**).

1. The **[`app.ts`](https://github.com/aurelia-tools/atb-samples/blob/master/skeleton-typescript-kendo/src/app.ts)** has added the **[`autocomplete route`](https://github.com/aurelia-tools/atb-samples/blob/master/skeleton-typescript-kendo/src/app.ts#L12)**

1. The **[`config.js`](https://github.com/aurelia-tools/atb-samples/blob/master/skeleton-typescript-kendo/config.js)** file is **[updated](https://github.com/aurelia-tools/atb-samples/blob/master/skeleton-typescript-kendo/config.js#L8-L9)** to enable the application code access to the KendoUI SDK and KendoUI bridge.

1. (___very important___) Execute the command:

```
npm install @types/kendo-ui
```
    which will add all kendoui type information data to the application (see the next section below for more information on this step).

***

Run this app (after being built by **`npm install` && `jspm install`**) with the command **`gulp watch`** - and you should see this:

<p align=center>
<img src="https://user-images.githubusercontent.com/2712405/29835900-65be348e-8cc1-11e7-8879-aaab4ca06372.png"></img>
<br><br>
Image 3
</p>

### A few comments on installing all needed typescript type files

This sample application is (as stated above) a copy of **[skeleton-typescript](https://github.com/aurelia-tools/atb-samples/tree/master/skeleton-typescript)** sample, so, all of the issues related to the aurelia framework type definition files are explained and discussed in **[Analysis of the aurelia typescript skeleton navigation](./status-in-august-2017/analysis-of-the-aurelia-typescript-skeleton-navigation.html)**.

Here, we need to only explain the step 7 above, which uses the **[newest approach](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/)** to getting typescript type files installed, approach that clearly works together with the previous method (**[Typings - The Typescript Type Definition Manager](https://github.com/typings/typings)**). Instead of creating the root level **`Typings`** folder

<p align=center>
<img src="https://user-images.githubusercontent.com/2712405/29837298-bff7e676-8cc5-11e7-9a7b-248f8a53a852.png"></img>
<br><br>
Image 4
</p>

KendoUI SDK types for Typescript are added to the **`@types`** section of the **`node_modules`** folder

<p align=center>
<img src="https://user-images.githubusercontent.com/2712405/29837674-d04fc204-8cc6-11e7-9f80-cdd4a6cf0630.png"></img>
<br><br>
Image 5
</p>

... and there is full support for all Kendo data types:

<p align=center>
<img src="https://user-images.githubusercontent.com/2712405/29845050-66c989aa-8cdf-11e7-824d-a3b8f85fab23.png"></img>
<br><br>
Image 6
</p>

***

## Bundling and hosting at GitHub [gh-pages](https://pages.github.com/)

This section covers the information described in Aurelia document **[`Bundling an Aurelia JSPM Application`](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/bundling-jspm/3)**, so we will just indicate the "pieces" described in that document.

1. The bundling "strategy" is written in the **[`bundles.js`](https://github.com/aurelia-ui-toolkits/skeleton-navigation-typescript-kendo-bundled/blob/master/build/bundles.js)** file, which defines three bundles:

    a)  **[`app-build`](https://github.com/aurelia-ui-toolkits/skeleton-navigation-typescript-kendo-bundled/blob/master/build/bundles.js#L3-L15)** containing app application files.

    b) **[`plugins`](https://github.com/aurelia-ui-toolkits/skeleton-navigation-typescript-kendo-bundled/blob/master/build/bundles.js#L16-L28)** containing all Aurelia KendoUI bridge files

    c) **[`kendo-build`](https://github.com/aurelia-ui-toolkits/skeleton-navigation-typescript-kendo-bundled/blob/master/build/bundles.js#L55-L63)** which contains all KendoUI SDK widgets.

1. To create these bundles run the **`gulp bundle`** command in the application's root folder.

1. In order to create the application ready for deployment, run **`gulp export`** command in the application's root folder.

1. It is often useful to verify that this "exported" application runs correctly, before actually deploying it. In otder to do that change the current directory to **`export`** folder and invoke the **[http-server](https://www.npmjs.com/package/http-server)**, a simple, zero-configuration command-line http server. (If you do not have this utility installed, simply run **`npm install http-server -g`**).

***
***
