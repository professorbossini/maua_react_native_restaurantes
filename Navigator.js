import { createStackNavigator } from "react-navigation-stack";
import RestaurantesTela from './telas/RestaurantesTela';
import AdicionarRestauranteTela from './telas/AdicionarRestauranteTela';
import { createAppContainer } from "react-navigation";

const Navigator = createStackNavigator({
    RestaurantesTela: RestaurantesTela,
    AdicionarRestauranteTela: AdicionarRestauranteTela
})

export default createAppContainer(Navigator);