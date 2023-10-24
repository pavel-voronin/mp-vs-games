import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  ScatterController,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

export default defineNuxtPlugin((nuxtApp) => {
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    annotationPlugin,
    ScatterController
  );
  nuxtApp.vueApp.component("Line", Line);
});
