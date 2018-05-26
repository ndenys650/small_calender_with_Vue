import Vue from 'vue';
import { seedData } from './seed.js';

export const store = {
    // bring in data from seed.js
    state: {
        seedData
    },
    getEventObj (dayId, eventDetails) {
        const dayObj = this.state.seedData.find(
          day => day.id === dayId
        );
        return dayObj.events.find(
          event => event.details === eventDetails
        );
    },
    getActiveDay () {
        return this.state.seedData.find((day) => day.active);
    },
    setActiveDay (dayId) {
        this.state.seedData.map((dayObj) => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
        });
    },
    submitEvent (eventDetails) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({ "details": eventDetails, "edit": false });
    },
    editEvent (dayId, eventDetails) {
        this.resetEditOfAllEvents();
        // find the day Object
        const eventObj = this.getEventObj(dayId, eventDetails);
        eventObj.edit = true;
    },
    resetEditOfAllEvents () {
        this.state.seedData.map((dayObj) => {
            dayObj.events.map((event) => {
                event.edit = false;
            });
        });
    },
    updateEvent (dayId, originalEventDetails, newEventDetails) {
        const eventObj = this.getEventObj(dayId, originalEventDetails);
        eventObj.details = newEventDetails;
        eventObj.edit = false;
      },
      getEventObj (dayId, eventDetails) {
        const dayObj = this.state.seedData.find(
            day => day.id === dayId
    );
    return dayObj.events.find(
      event => event.details === eventDetails
    );
  },
}