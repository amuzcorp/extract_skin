<template>
  <div class="calendar-wrap">
    <b-row class="calendar-row">
      <b-col cols="6" class="calendar-col">
        <div class="calendar-group">
          <b-form-input
            type="text"
            id="s-date"
            class="box-shadow calendar-input"
            readonly
            v-model="startDate"
          ></b-form-input>
          <b-form-datepicker
            button-only
            right
            dropbottom
            hide-header
            v-model="startDate"
            class="calendar-icon"
            aria-controls="s-date"
            :max="maxDate"
          ></b-form-datepicker>
        </div>
      </b-col>
      <b-col cols="6" class="calendar-col">
        <div class="calendar-group">
          <b-form-input
            type="text"
            id="e-date"
            class="box-shadow calendar-input"
            readonly
            v-model="endDate"
          ></b-form-input>
          <b-form-datepicker
            button-only
            right
            dropbottom
            hide-header
            v-model="endDate"
            class="calendar-icon"
            aria-controls="e-date"
            :min="startDate"
            :max="maxDate"
          ></b-form-datepicker>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "date-picker-skin",
  components: {},
  data() {
    return {
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      maxDate: new Date().toISOString().substr(0, 10) + 1,
    };
  },
  methods: {},
};
</script>
<style>
.calendar-wrap {
  min-width: 274px;
}
.calendar-group {
  display: flex;
  align-items: center;
}
.calendar-wrap .calendar-row .calendar-col {
  position: relative;
}
.calendar-wrap .calendar-row .calendar-col::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -4px;
  transform: translateY(-50%);
  width: 5px;
  height: 1px;
  background-color: #6a707e;
}
.calendar-wrap .calendar-row .calendar-col:last-child {
  margin-right: 0;
}
.calendar-wrap .calendar-row .calendar-col:last-child::after,
.calendar-group .sr-only {
  display: none;
}
.calendar-group .calendar-input {
  width: 103px;
  height: 30px;
  margin-right: 7px;
  padding: 0;
  background-color: #ffffff;
  border: 1px solid #fff;
  border-radius: 30px;
  color: #6a707e;
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
}
.calendar-group .calendar-icon > .btn {
  background-color: unset;
  padding: 0;
  border: 0;
}
.calendar-group .calendar-icon .btn > svg {
  color: #6a707e;
  width: 15px;
}
.calendar-group .dropdown-menu .btn-outline-secondary:hover {
  color: #6a707e;
}
.calendar-group .dropdown-menu .small {
  display: none;
}
.calendar-group .dropdown-menu {
  border-radius: 10px;
}
.calendar-group .dropdown-menu .form-control,
.calendar-group .dropdown-menu .form-control:focus {
  border: 0;
  box-shadow: unset;
}
.calendar-group .btn-primary.active {
  background-color: #6e3cbc;
}
.calendar-group .dropdown-menu .btn-outline-secondary:hover {
  background-color: rgba(110, 60, 188, 0.7);
  color: #fff;
}
</style>
