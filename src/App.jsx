import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import FetchValue from './fetchValue'
import { Provider} from 'react-redux';

import Counter from './counter';
import store from './redux/store';
// import Timer from './Timer'
// import ToggleExample from './ToggleExample'
// import Parent from './Parent'
// import HooksValue from './HooksValue'

const App = () => {
  return (
    <Provider store={store}>
    {/* <View style={{flex:1, justifyContent:"center",alignItems:"center"}}> */}

      {/* <Timer/> */}
      {/* <ToggleExample/> */}
       {/* <Parent/> */}
       {/* <HooksValue/> */}
       {/* <FetchValue/> */}
<Counter/>
    {/* </View> */}
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})