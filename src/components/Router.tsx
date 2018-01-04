import createHistory from 'history/createBrowserHistory';
import { Location } from 'history';
import { PlaceManager } from '../stores/PlaceManager';

export class Router {
  static startWatchingLocation(placeManager: PlaceManager) {
    const history = createHistory();
    history.listen((location: Location) => {
      placeManager.onExternalChange(location);
    });
  }
}
