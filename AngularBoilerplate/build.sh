#!/bin/sh
dotnet restore
dotnet build --configuration Release
cd Angular.Web
npm install
npm install -g @angular/cli
ng build --prod --aot