<template>
  <b-row style="margin-top: 5%">
    <b-col cols="5" class="content-left order-md-last order-sm-last order-last">
      <div id="results_map_view">
        <div class="container-fluid">
          <div class="row">
            <div class="col-10">
              <h4>
                <strong>{{ response.properties.length }}</strong> results
              </h4>
            </div>
            <div class="col-2">
              <a href="#0" class="search_map btn_search_map_view"></a>
              <!-- /open search panel -->
            </div>
          </div>
          <!-- /row -->
          <div class="search_map_wp">
            <div class="custom-search-input-2 map_view">
              <div class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="What are you looking for..."
                />
                <i class="icon_search"></i>
              </div>
              <div class="form-group">
                <input class="form-control" type="text" placeholder="Where" />
                <i class="icon_pin_alt"></i>
              </div>
              <select class="wide">
                <option>All Categories</option>
                <option>Shops</option>
                <option>Properties</option>
                <option>proptys</option>
                <option>Bars</option>
                <option>Events</option>
                <option>Fitness</option>
              </select>
              <input type="submit" value="Search" />
            </div>
          </div>
          <!-- /search_map_wp -->
        </div>
        <!-- /container -->
      </div>
      <!-- /results -->

      <div class="filters_listing version_3" style="margin: 0px">
        <div class="container-fluid">
          <ul class="clearfix">
            <li>
              <div class="switch-field">
                <input
                  type="radio"
                  id="all"
                  name="listing_filter"
                  value="all"
                  checked
                />
                <label for="all">All</label>
                <input
                  type="radio"
                  id="popular"
                  name="listing_filter"
                  value="popular"
                />
                <label for="popular">Popular</label>
                <input
                  type="radio"
                  id="latest"
                  name="listing_filter"
                  value="latest"
                />
                <label for="latest">Latest</label>
              </div>
            </li>
            <li>
              <a
                class="btn_filt_map"
                data-toggle="collapse"
                href="#filters"
                aria-expanded="false"
                aria-controls="filters"
                data-text-swap="Less filters"
                data-text-original="More filters"
                >More filters</a
              >
            </li>
          </ul>
        </div>
        <!-- /container -->
      </div>
      <!-- /filters -->

      <div class="collapse map_view" id="filters">
        <div class="container-fluid margin_30_5">
          <h6>Category</h6>
          <div class="row">
            <div class="col-md-6">
              <div class="filter_type">
                <ul>
                  <li>
                    <label class="container_check">
                      All
                      <small>(945)</small>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container_check">
                      Plot
                      <small>(45)</small>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container_check">
                      Apartments
                      <small>(30)</small>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="filter_type">
                <ul>
                  <li>
                    <label class="container_check">
                      Villa
                      <small>(25)</small>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container_check">
                      Builder Floor
                      <small>(56)</small>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="add_bottom_30">
                <h6>Distance</h6>
                <div class="distance">
                  Radius around selected destination
                  <span></span> km
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="10"
                  value="30"
                  data-orientation="horizontal"
                />
              </div>
            </div>
          </div>
          <!-- /row -->
        </div>
      </div>
      <!-- /Filters -->

      <div v-if="response.loader">
        <b-card no-body>
          <b-card-body>
            <b-row>
              <b-col cols="6">
                <b-skeleton-img no-aspect height="200px"></b-skeleton-img>
              </b-col>
              <b-col cols="6">
                <b-skeleton
                  no-aspect
                  animation="wave"
                  width="85%"
                  class="mt-3"
                  height="25%"
                ></b-skeleton>
                <b-skeleton
                  animation="wave"
                  width="55%"
                  height="30%"
                ></b-skeleton>
                <b-skeleton
                  animation="wave"
                  width="70%"
                  height="25%"
                ></b-skeleton>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <b-card-body>
            <b-row>
              <b-col cols="6">
                <b-skeleton-img no-aspect height="200px"></b-skeleton-img>
              </b-col>
              <b-col cols="6">
                <b-skeleton
                  no-aspect
                  animation="wave"
                  width="85%"
                  class="mt-3"
                  height="25%"
                ></b-skeleton>
                <b-skeleton
                  animation="wave"
                  width="55%"
                  height="30%"
                ></b-skeleton>
                <b-skeleton
                  animation="wave"
                  width="70%"
                  height="25%"
                ></b-skeleton>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <b-card-body>
            <b-row>
              <b-col cols="6">
                <b-skeleton-img no-aspect height="200px"></b-skeleton-img>
              </b-col>
              <b-col cols="6">
                <b-skeleton
                  no-aspect
                  animation="wave"
                  width="85%"
                  class="mt-3"
                  height="25%"
                ></b-skeleton>
                <b-skeleton
                  animation="wave"
                  width="55%"
                  height="30%"
                ></b-skeleton>
                <b-skeleton
                  animation="wave"
                  width="70%"
                  height="25%"
                ></b-skeleton>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </div>
      <div v-if="!response.loader">
        <ItemBox
          v-for="item in response.properties"
          :key="item.name"
          :item="item"
        />
      </div>
    </b-col>
    <b-col cols="7" style="margin-top: 0px">
      <div
        id="ts-map-hero"
        class="h-100 ts-z-index__1"
        data-ts-map-leaflet-provider="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
        data-ts-map-leaflet-attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://cartodb.com/attributions'>CartoDB</a>"
        data-ts-map-zoom-position="bottomright"
        data-ts-map-scroll-wheel="1"
        data-ts-map-zoom="11"
        data-ts-map-center-latitude="12.9716"
        data-ts-map-center-longitude="77.5946"
        data-ts-locale="en-US"
        data-ts-currency="INR"
        data-ts-unit="m<sup>2</sup>"
        data-ts-display-additional-info="area_Area;bedrooms_Bedrooms;bathrooms_Bathrooms"
      ></div>
    </b-col>
  </b-row>
</template>

<script>
import gql from "graphql-tag";
import ls from "../helpers/localStorage";
import { EventBus } from "../helpers/event-bus";
import { mapPropertyData } from "../helpers/api";

export default {
  layout: "map-view",
  head: {
    title: "Map View",
  },
  data() {
    return {
      response: {
        properties: [],
        count: 0,
        loader: false,
      },
      variables: {
        limit: 200,
        offset: 0,
        order_by: {
          created_on: "desc",
        },
      },
    };
  },
  methods: {
    queryParams() {
      const loc = ls.get("loc") && ls.get("loc").activeCity;
      if (loc) {
        this.variables = {
          ...this.variables,
          where: {
            _and: {
              city: {
                _like: `%${loc}%`,
              },
            },
          },
        };
        // Listen location Events
        this.listenEvents(loc);
      }
    },
    async fetchData() {
      this.response.loader = true;
      this.queryParams();
      await this.$apollo
        .query({
          query: require("@/graphQl/queries/property.gql"),
          variables: this.variables,
          fetchPolicy: "network-only",
        })
        .then(({ data }) => {
          const { property = [], property_aggregate } = data;
          this.response.properties = [
            ...this.response.properties,
            ...mapPropertyData(property),
          ];
          this.response.count = property_aggregate.aggregate.count || 0;
          this.generateCluster();
          setTimeout(() => {
            this.response.loader = false;
          }, 1000);
        });
    },
    async loadMore() {
      this.variables = {
        ...this.variables,
        offset: this.variables.offset + this.variables.limit,
      };
      this.response.loader = true;
      this.fetchData();
    },
    listenEvents(existingLoc) {
      EventBus.$on("EVENT:setLocation", (loc) => {
        const queryParams = { ...this.$route.query, city: loc };
        if (loc && loc !== existingLoc && this.$route.name.match(/map-view/g)) {
          const queryParams = { ...this.$route.query, city: loc };
          const routeConfig = Object.keys(queryParams).length
            ? { path: "/map-view", query: queryParams }
            : { path: "/map-view" };
          this.$router.push(routeConfig);
        }
      });
    },
    generateLocation() {
      let latitude = "12.90915937949638",
        longitude = "77.55288654040529",
        radiusInMeters = 500;
      var getRandomCoordinates = function (radius, uniform) {
        // Generate two random numbers
        var a = Math.random(),
          b = Math.random();

        // Flip for more uniformity.
        if (uniform) {
          if (b < a) {
            var c = b;
            b = a;
            a = c;
          }
        }

        // It's all triangles.
        return [
          b * radius * Math.cos((2 * Math.PI * a) / b),
          b * radius * Math.sin((2 * Math.PI * a) / b),
        ];
      };

      var randomCoordinates = getRandomCoordinates(radiusInMeters, true);

      // Earths radius in meters via WGS 84 model.
      var earth = 6378137;

      // Offsets in meters.
      var northOffset = randomCoordinates[0],
        eastOffset = randomCoordinates[1];

      // Offset coordinates in radians.
      var offsetLatitude = northOffset / earth,
        offsetLongitude =
          eastOffset / (earth * Math.cos(Math.PI * (latitude / 180)));

      // Offset position in decimal degrees.
      return {
        latitude: latitude + offsetLatitude * (180 / Math.PI),
        longitude: longitude + offsetLongitude * (180 / Math.PI),
      };
    },
    generateCluster() {
      const response = this.response;
      var mapId = "ts-map-hero";

      //==================================================================================================================
      // VARIABLES
      // =================================================================================================================

      var newMarkers = [];
      var loadedMarkersData = response.properties;
      var allMarkersData = response.properties;
      var lastMarker;
      var map;
      var markerCluster;
      var $VueInstance = this;
      if ($("#" + mapId).length) {
        //==============================================================================================================
        // MAP SETTINGS
        // =============================================================================================================
        var mapElement = $(document.getElementById(mapId));
        var mapDefaultZoom = parseInt(mapElement.attr("data-ts-map-zoom"), 10);
        var centerLatitude = mapElement.attr("data-ts-map-center-latitude");
        var centerLongitude = mapElement.attr("data-ts-map-center-longitude");
        var locale = mapElement.attr("data-ts-locale");
        var currency = mapElement.attr("data-ts-currency");
        var unit = mapElement.attr("data-ts-unit");
        var controls = parseInt(mapElement.attr("data-ts-map-controls"), 10);
        var scrollWheel = parseInt(
          mapElement.attr("data-ts-map-scroll-wheel"),
          10
        );
        var leafletMapProvider = mapElement.attr(
          "data-ts-map-leaflet-provider"
        );
        var leafletAttribution = mapElement.attr(
          "data-ts-map-leaflet-attribution"
        );
        var zoomPosition = mapElement.attr("data-ts-map-zoom-position");
        var mapBoxAccessToken = mapElement.attr(
          "data-ts-map-mapbox-access-token"
        );
        var mapBoxId = mapElement.attr("data-ts-map-mapbox-id");

        if (mapElement.attr("data-ts-display-additional-info")) {
          var displayAdditionalInfoTemp = mapElement
            .attr("data-ts-display-additional-info")
            .split(";");
          var displayAdditionalInfo = [];
          for (var i = 0; i < displayAdditionalInfoTemp.length; i++) {
            displayAdditionalInfo.push(displayAdditionalInfoTemp[i].split("_"));
          }
        }

        // Default map zoom
        if (!mapDefaultZoom) {
          mapDefaultZoom = 14;
        }

        //==================================================================================================================
        // MAP ELEMENT
        // =================================================================================================================
        map = L.map(mapId, {
          zoomControl: false,
          scrollWheelZoom: scrollWheel,
        });
        map.setView([centerLatitude, centerLongitude], mapDefaultZoom);

        L.tileLayer(leafletMapProvider, {
          attribution: leafletAttribution,
          id: mapBoxId,
          accessToken: mapBoxAccessToken,
        }).addTo(map);

        if (controls !== 0 && zoomPosition) {
          L.control.zoom({ position: zoomPosition }).addTo(map);
        } else if (controls !== 0) {
          L.control.zoom({ position: "topright" }).addTo(map);
        }

        createMarkers();
      }

      //==================================================================================================================
      // Create DIV with the markers data
      // =================================================================================================================
      function createMarkers() {
        markerCluster = L.markerClusterGroup({
          showCoverageOnHover: false,
        });

        for (var i = 0; i < loadedMarkersData.length; i++) {
          var markerContent = document.createElement("div");

          markerContent.innerHTML =
            '<div class="ts-marker-wrapper">' +
            '<a href="#" class="ts-marker" data-ts-id="' +
            loadedMarkersData[i]["id"] +
            '" data-ts-ln="' +
            i +
            '">' +
            (loadedMarkersData[i]["ribbon"] !== undefined
              ? '<div class="ts-marker__feature">' +
                loadedMarkersData[i]["ribbon"] +
                "</div>"
              : "") +
            (loadedMarkersData[i]["title"] !== undefined
              ? '<div class="ts-marker__title">' +
                loadedMarkersData[i]["title"] +
                "</div>"
              : "") +
            (loadedMarkersData[i]["price"] !== undefined &&
            loadedMarkersData[i]["price"] > 0
              ? '<div class="ts-marker__info">' +
                formatPrice(loadedMarkersData[i]["price"]) +
                "</div>"
              : "") +
            (loadedMarkersData[i]["marker_image"] !== undefined
              ? '<div class="ts-marker__image ts-black-gradient" style="background-image: url(' +
                loadedMarkersData[i]["marker_image"] +
                ')"></div>'
              : '<div class="ts-marker__image ts-black-gradient" style="background-image: url(/assets/img/marker-default-img.png)"></div>') +
            "</a>" +
            "</div>";

          placeLeafletMarker({
            i: i,
            markerContent: markerContent,
            method: "latitudeLongitude",
          });
        }

        // After the markers are created, do the rest

        markersDone();
      }

      //==================================================================================================================
      // When markers are placed, do the rest
      // =================================================================================================================
      function markersDone() {
        //==================================================================================================================
        // MARKER CLUSTERER
        // =============================================================================================================
        map.addLayer(markerCluster);
        map.on("moveend", createSideBarResult);
        createSideBarResult();
      }

      //==================================================================================================================
      // Google Rich Marker plugin
      // =================================================================================================================

      function placeLeafletMarker(parameters) {
        var i = parameters["i"];

        // Define marker HTML

        var markerIcon = L.divIcon({
          html: parameters["markerContent"].innerHTML,
          iconSize: [42, 47],
          iconAnchor: [0, 47],
        });

        // Attach marker to map
        var marker = L.marker(
          [loadedMarkersData[i]["latitude"], loadedMarkersData[i]["longitude"]],
          {
            icon: markerIcon,
          }
        );

        marker.loopNumber = i;

        markerCluster.addLayer(marker);

        // Open Popup on click

        marker.on("click", function () {
          if (lastMarker && lastMarker._icon) {
            $(lastMarker._icon.firstChild).removeClass("ts-hide-marker");
          }
          openInfobox({
            id: $(this._icon).find(".ts-marker").attr("data-ts-id"),
            parentMarker: marker,
            i: i,
            url: `/property/
              ${loadedMarkersData[i].id}?
              pId=${loadedMarkersData[i].property_id}&
              id=${loadedMarkersData[i].id}`,
          });
        });

        newMarkers.push(marker);
      }

      //==================================================================================================================
      // Open InfoBox on marker click
      // =================================================================================================================
      function openInfobox(parameters) {
        var i = parameters["i"];
        var parentMarker = parameters["parentMarker"];
        var id = parameters["id"];
        var infoboxHtml = document.createElement("div");

        // First create and HTML for infobox
        createInfoBoxHTML({ i: i, infoboxHtml: infoboxHtml });

        //==============================================================================================================
        // Set InfoBox options
        //==============================================================================================================

        var popup = L.popup({
          closeButton: false,
          offset: [120, 0],
          closeOnClick: false,
        })
          .setLatLng([parentMarker._latlng.lat, parentMarker._latlng.lng])
          .setContent(infoboxHtml)
          .openOn(map);

        // Set the new "Last" opened marker
        lastMarker = parentMarker;

        // Hide the current marker, so only InfoBox is visible
        parentMarker._markerIcon = parentMarker._icon.firstChild;
        $(parentMarker._icon.firstChild).addClass("ts-hide-marker");

        setTimeout(function () {
          $(".ts-infobox[data-ts-id='" + id + "']")
            .closest(".infobox-wrapper")
            .addClass("ts-show");

          $(".ts-infobox[data-ts-id='" + id + "'] .ts-close").on(
            "click",
            function () {
              $(".ts-infobox[data-ts-id='" + id + "']")
                .closest(".infobox-wrapper")
                .removeClass("ts-show");
              $(parentMarker._markerIcon).removeClass("ts-hide-marker");
              map.closePopup();
            }
          );
        }, 50);
      }

      //==================================================================================================================
      // Create Infobox HTML element
      //==================================================================================================================

      function createInfoBoxHTML(parameters) {
        var i = parameters["i"];
        var infoboxHtml = parameters["infoboxHtml"];

        infoboxHtml.innerHTML =
          '<div class="infobox-wrapper">' +
          '<div class="ts-infobox" data-ts-id="' +
          loadedMarkersData[i]["id"] +
          '">' +
          '<img src="/assets/img/infobox-close.svg" class="ts-close">' +
          (loadedMarkersData[i]["ribbon"] !== undefined
            ? '<div class="ts-ribbon">' +
              loadedMarkersData[i]["ribbon"] +
              "</div>"
            : "") +
          (loadedMarkersData[i]["ribbon_corner"] !== undefined
            ? '<div class="ts-ribbon-corner"><span>' +
              loadedMarkersData[i]["ribbon_corner"] +
              "</span></div>"
            : "") +
          '<a href="' +
          `/property/
              ${loadedMarkersData[i].id}?
              pId=${loadedMarkersData[i].property_id}&
              id=${loadedMarkersData[i].id}` +
          '" class="ts-infobox__wrapper ts-black-gradient">' +
          (loadedMarkersData[i]["badge"] !== undefined &&
          loadedMarkersData[i]["badge"].length > 0
            ? '<div class="badge badge-dark">' +
              loadedMarkersData[i]["badge"] +
              "</div>"
            : "") +
          '<div class="ts-infobox__content">' +
          '<figure class="ts-item__info">' +
          (loadedMarkersData[i]["price"] !== undefined &&
          loadedMarkersData[i]["price"] > 0
            ? '<div class="ts-item__info-badge">' +
              formatPrice(loadedMarkersData[i]["price"]) +
              "</div>"
            : "") +
          (loadedMarkersData[i]["title"] !== undefined &&
          loadedMarkersData[i]["title"].length > 0
            ? "<h4>" + loadedMarkersData[i]["title"] + "</h4>"
            : "") +
          (loadedMarkersData[i]["address1"] !== undefined &&
          loadedMarkersData[i]["address1"].length > 0
            ? '<aside><i class="fa fa-map-marker mr-2"></i>' +
              loadedMarkersData[i]["address1"] +
              "</aside>"
            : "") +
          "</figure>" +
          additionalInfoHTML({ display: displayAdditionalInfo, i: i }) +
          "</div>" +
          '<div class="ts-infobox_image" style="background-image: url(' +
          loadedMarkersData[i]["marker_image"] +
          ')"></div>' +
          "</a>" +
          "</div>" +
          "</div>";
      }

      //==================================================================================================================
      // Create Additional Info HTML element
      //==================================================================================================================

      function additionalInfoHTML(parameters) {
        var i = parameters["i"];
        var displayParameter;

        var additionalInfoHtml = "";
        for (var a = 0; a < parameters["display"].length; a++) {
          displayParameter = parameters["display"][a];
          if (loadedMarkersData[i][displayParameter[0]] !== undefined) {
            additionalInfoHtml +=
              "<dl>" +
              "<dt>" +
              displayParameter[1] +
              "</dt>" +
              "<dd>" +
              loadedMarkersData[i][displayParameter[0]] +
              (displayParameter[a] === "area" ? unit : "") +
              "</dd>" +
              "</dl>";
          }
        }
        if (additionalInfoHtml) {
          return (
            '<div class="ts-description-lists">' + additionalInfoHtml + "</div>"
          );
        } else {
          return "";
        }
      }

      //==================================================================================================================
      // Create SideBar HTML Results
      //==================================================================================================================
      function createSideBarResult() {
        //var visibleMarkersId = [];
        var visibleMarkersOnMap = [];
        var resultsHtml = [];

        for (var i = 0; i < loadedMarkersData.length; i++) {
          if (map.getBounds().contains(newMarkers[i].getLatLng())) {
            visibleMarkersOnMap.push(newMarkers[i]);
            newMarkers[i].addTo(map);
          } else {
            newMarkers[i].remove();
          }
        }

        markerCluster.refreshClusters();

        for (i = 0; i < visibleMarkersOnMap.length; i++) {
          var id = visibleMarkersOnMap[i].loopNumber;
          var additionalInfoHtml = "";

          if (loadedMarkersData[id]["additional_info"]) {
            for (
              var a = 0;
              a < loadedMarkersData[id]["additional_info"].length;
              a++
            ) {
              additionalInfoHtml +=
                "<dl>" +
                "<dt>" +
                loadedMarkersData[id]["additional_info"][a]["title"] +
                "</dt>" +
                "<dd>" +
                loadedMarkersData[id]["additional_info"][a]["value"] +
                "</dd>" +
                "</dl>";
            }
          }
          resultsHtml.push(loadedMarkersData[id]);
        }

        $VueInstance.response = {
          ...$VueInstance.response,
          properties: [...resultsHtml],
        };

        var $results = $("#ts-results").find(".ts-sly-frame");
        if ($results.hasClass("ts-loaded")) {
          $results.sly("reload");
        } else {
          initializeSly();
        }

        var resultsBar = $(
          ".scroll-wrapper.ts-results__vertical-list, .scroll-wrapper.ts-results__grid"
        );
        if ($(window).width() < 575) {
          resultsBar
            .find(".ts-results__vertical")
            .css("pointer-events", "none");
          resultsBar.on("click", function () {
            $(this).addClass("ts-expanded");
            $(this).find(".ts-results__vertical").css("pointer-events", "auto");
            $("#ts-map-hero").addClass("ts-dim-map");
          });

          $("#ts-map-hero").on("click", function () {
            if (resultsBar.hasClass("ts-expanded")) {
              resultsBar.removeClass("ts-expanded");
              $("#ts-map-hero").removeClass("ts-dim-map");
              resultsBar
                .find(".ts-results__vertical")
                .css("pointer-events", "none");
            }
          });
        } else {
          resultsBar.removeClass("ts-expanded");
          resultsBar
            .find(".ts-results__vertical")
            .css("pointer-events", "auto");
          $("#ts-map-hero").removeClass("ts-dim-map");
        }
      }

      // Center map on result click (Disabled)
      //==============================================================================================================

      $(document).on("click", ".ts-center-marker", function () {
        $(".ts-marker").parent().removeClass("ts-active-marker");
        map.setView(
          newMarkers[$(this).parent().attr("data-ts-ln")].getLatLng()
        );
        var id = $(this).parent().attr("data-ts-id");
        $(".ts-marker[data-ts-id='" + id + "']")
          .parent()
          .addClass("ts-active-marker");
      });

      // Highlight marker on result hover
      //==============================================================================================================

      var timer;
      $(document).on(
        {
          mouseenter: function () {
            var id = $(this).parent().attr("data-ts-id");
            timer = setTimeout(function () {
              $(".ts-marker").parent().addClass("ts-marker-hide");
              $(".ts-marker[data-ts-id='" + id + "']")
                .parent()
                .addClass("ts-active-marker");
            }, 500);
          },
          mouseleave: function () {
            clearTimeout(timer);
            $(".ts-marker")
              .parent()
              .removeClass("ts-active-marker")
              .removeClass("ts-marker-hide");
          },
        },
        ".ts-result"
      );

      function formatPrice(price) {
        return Number(price)
          .toLocaleString(locale, { style: "currency", currency: currency })
          .replace(/\D\d\d$/, "");
      }
    },
  },
  watch: {
    "$route.query": {
      handler(newValue) {
        this.response.properties = [];
        this.fetchData();
      },
      immediate: true,
    },
  },
};
</script>
