import React, { Component } from "react";

import { FeedScreen, SignInScreen } from "./screens";

class App extends Component {
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <SearchBar />
  //       <UserList users={api.users} />
  //     </View>
  //   )
  // }

  render() {
    // return <FeedScreen />
    return <SignInScreen />
  }
}

export default App;
