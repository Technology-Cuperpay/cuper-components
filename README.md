# cuper-components

Actualizar el package
1. Clonar este repositorio
2. Realizar cambios y probarlos
3. Configurar `.npmrc` :

`registry=https://registry.npmjs.org/
@aflorescuper:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=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`

4. Cambiar versión en package.json `"version": "1.0.6"`
5. Ejecutar `npm run rollup`
6. Ejecutar `npm publish`

NOTA: El paquete se importa con la cuenta @aflorescuper por lo que aparece aun en el repositorio original 
Se puede agregar a otro proyecto usando npm install `@aflorescuper/cuper-components@1.0.6` con la configuración del paso 3
