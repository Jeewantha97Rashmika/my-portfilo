import React from 'react';

import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp({variant,massege,changed}) {
  const { enqueueSnackbar } = useSnackbar();

 React.useEffect(()=>{
   if(changed >0 ) enqueueSnackbar(massege,{variant});
},[variant, changed,massege]);

  return (
    <React.Fragment>
     
    </React.Fragment>
  );
}

export default function SnackBar({variant,massege,changed}) {
  return (
    <SnackbarProvider maxSnack={10}>
      <MyApp variant={variant} massege={massege} changed={changed}/>
    </SnackbarProvider>
  );
}
