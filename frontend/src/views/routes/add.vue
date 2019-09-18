<template>
  <el-container style="height: 800px; border: 1px solid #eee">

    <el-aside width="320px" style="background-color: rgb(238, 241, 246); padding: 10px;">
      <el-form label-position="top" ref="form" :model="form" label-width="120px">
        <el-form-item label="Start location">

          <gmap-autocomplete class="el-input__inner"
                             placeholder="Enter location"
                             @place_changed="setPlace">
          </gmap-autocomplete>

        </el-form-item>

        <el-form-item label="End location">

          <gmap-autocomplete class="el-input__inner"
                             placeholder="Enter destination"
          >
          </gmap-autocomplete>

        </el-form-item>

        <el-form-item>
          <el-checkbox v-model="checked1" label="Round trip" border></el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button size="small" type="primary" @click="submitForm('ruleForm')">Add</el-button>
          <el-button size="small" @click="resetForm('ruleForm')">Clear</el-button>
        </el-form-item>
      </el-form>

      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-location"></i>Existing Routes</template>
          <el-menu-item-group>
            <template slot="title">Route 1</template>
            <el-menu-item index="1-1">7.30am: Departing from Kacyiru</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Route 2">
            <el-menu-item index="1-3">7.30am: Departing from Kisimenti</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>

      <el-main>

        <!-- Map -->

        <GmapMap
          :center="{lat:-1.93372, lng:30.14392}"
          :zoom="8"
          style="width: 100%; height: 100%"
        >

          <Gmap-Marker v-for="(marker, index) in markers"
                       :key="index"
                       :position="marker.position"
          ></Gmap-Marker>
          <Gmap-Marker
            v-if="this.place"
            label="&#x2605;"
            :position="{
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng(),
        }"
          ></Gmap-Marker>

        </GmapMap>

        <!--<googlemaps-map-->
        <!--ref="map"-->
        <!--class="map"-->
        <!--:center.sync="center"-->
        <!--:zoom.sync="zoom"-->
        <!--&gt;-->
        <!--&lt;!&ndash; User Position &ndash;&gt;-->
        <!--<googlemaps-user-position-->
        <!--@update:position="setUserPosition"/>-->

        <!--&lt;!&ndash; Marker &ndash;&gt;-->
        <!--<googlemaps-marker-->
        <!--title="Carnegie Mellon University Africa"-->
        <!--:draggable="true"-->
        <!--:position="{ lat: -1.93372, lng: 30.14392 }"/>-->

        <!--</googlemaps-map>-->

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "add",
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        route: {
          origin: 0,
          destination: 0,
          roundTrip: false,
          title: ''
        },
        tableData: Array(20).fill(item),
        markers: [],
        place: null,
      }
    },
    methods: {
      setDescription(description) {
        this.description = description;
      },
      setPlace(place) {
        this.place = place
      },
      usePlace(place) {
        if (this.place) {
          this.markers.push({
            position: {
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng(),
            }
          })
          this.place = null;
        }
      }
    },
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .demo {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .map {
    flex: 100% 1 1;
    height: 100%;
  }

</style>
