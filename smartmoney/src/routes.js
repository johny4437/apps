import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Main from './Pages/Main';
import NewEntry from './Pages/NewEntry';

const Routes = createAppContainer(
    createSwitchNavigator({
        Main,
        NewEntry
    },
    {
        initialRouteName:'Main',
        backBehavior:'order'

    }),
);

export default Routes;