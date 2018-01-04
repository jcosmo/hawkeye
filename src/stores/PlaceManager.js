import { action, computed, observable } from 'mobx';
import { Place } from '../model/Place';
import { Location } from 'history';

export class PlaceManager {
  @observable cachedLocation = Place.NOT_IMPLEMENTED;

  constructor() {
    this.cachedLocation = Place.NOT_IMPLEMENTED;
  }

  @action
  gotoOrgUnitContexts() {
    this.cachedLocation = Place.ORG_UNIT_CONTEXTS;
  }

  @action
  gotoOrgUnitTypes() {
    this.cachedLocation = Place.ORG_UNIT_TYPES;
  }

  @action
  gotoNotImplemented() {
    this.cachedLocation = Place.NOT_IMPLEMENTED;
  }

  get currentPlace(): Place {
    return this.cachedLocation;
  }

  @computed
  get currentPath(): string {
    switch (this.cachedLocation) {
      case Place.ORG_UNIT_CONTEXTS:
        return '#orgUnitContexts';
      case Place.ORG_UNIT_TYPES:
        return '#orgUnitTypes';
      case Place.NOT_IMPLEMENTED:
        return '#not_implemented';
      default:
        return '#error';
    }
  }

  onExternalChange(location: Location) {
    if (
      location.hash === '#orgUnitContexts' ||
      location.hash === 'orgUnitContexts'
    ) {
      this.gotoOrgUnitContexts();
    } else if (location.hash === '#orgUnitTypes') {
      this.gotoOrgUnitTypes();
    } else {
      this.gotoNotImplemented();
    }
  }
}
