// It's is export import system
// Mainly encapsulated everything to specific module 
// IMPORTANT:
    // dynamic import
        // only import on demand, when it's need -> like, when use click on a button import will happend
        import("module").then((module: any) => {
            module.default();
            module.namedExport();
          });
          
          // Or with async/await
        (async () => {
        const module: any = await import("module");
        module.default();
        module.namedExport();
        })();
        // import path can be dynamic -> when need picture the img name can be dynamic
        // const res = await import(`../assets/dog${num}.png`);
