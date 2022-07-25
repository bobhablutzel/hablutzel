/* eslint-disable vue/multi-word-component-names */
import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createRouter, createWebHistory } from 'vue-router'
import 'primevue/resources/primevue.css'
import './assets/theme.css'
import 'primeicons/primeicons.css'


import Panel from 'primevue/panel'
import Divider from "primevue/divider"
import Menubar from "primevue/menubar"
import Menu from 'primevue/menu';
import TieredMenu from "primevue/tieredmenu"
import Card from 'primevue/card'
import PanelMenu from "primevue/panelmenu"
import Accordion from "primevue/accordion"
import AccordionTab from "primevue/accordiontab"

// Views
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Academy from '@/views/academy/Academy.vue'
import ArchitectureIntro from "@/views/academy/DefiningArchitecture"
import BecomingAnArchitect from "@/views/academy/BecomingAnArchitect"
import AcademyOverview from "@/views/academy/AcademyOverview"
import Framework from '@/views/framework/Framework.vue'
import FrameworkIntroduction from '@/views/framework/Introduction.vue'
import FrameworkOverview from "@/views/framework/Overview"
import UnderConstruction from "@/views/UnderConstruction"
import FiveDisciplines from "@/views/framework/FiveDisciplines"
import DefiningArchitecture from "@/views/academy/DefiningArchitecture"
import DisciplineGuidance from "@/views/framework/DisciplineGuidance"
import DisciplineImplementation from "@/views/framework/DisciplineImplementation"
import DisciplineOversight from "@/views/framework/DisciplineOversight"
import DisciplinePortfolioManagement from "@/views/framework/DisciplinePortfolioManagement"
import DisciplineBusinessStrategy from "@/views/framework/strategy/DisciplineBusinessStrategy"
import ARSCIVX from "@/views/academy/arsciv-x/ARSCIV-X"
import ARSCIVXOverview from "@/views/academy/arsciv-x/ARSCIV-X-Overview"
import ARSCIVXDiscussion from "@/views/academy/arsciv-x/ARSCIV-X-Discussion"
import ARSCIVXRoles from "@/views/academy/arsciv-x/ARSCIV-X-Roles"
import ARSCIVXExamples from "@/views/academy/arsciv-x/ARSCIV-X-Examples"
import OrganizationalAlignment from "@/views/framework/OrganizationalAlignment"
import ChiefArchitectJD from "@/views/library/jd/ChiefArchitectJD";
import Library from "@/views/library/Library";
import LibraryOverview from "@/views/library/LibraryOverview";
import JobDescriptions from "@/views/library/jd/JobDescriptions";
import JobDescriptionList from "@/views/library/jd/JobDescriptionList";

// Create the application
const app = createApp(App)

// Install PrimeVue
app.use(PrimeVue)
app.component('Panel', Panel)
app.component('Divider', Divider)
app.component('MenuBar', Menubar)
app.component('Menu', Menu)
app.component('TieredMenu', TieredMenu)
app.component('Card', Card)
app.component('PanelMenu', PanelMenu)
app.component('Accordion', Accordion)
app.component('AccordionTab', AccordionTab)


// Create our routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/academy', name: 'ArchitectureAcademy', component: Academy,
            children: [
                { path: '', name: 'AcademyOverview', component: AcademyOverview },
                { path: 'intro', name: 'ArchitectureIntro', component: ArchitectureIntro },
                { path: 'becoming', name: 'BecomingAnArchitect', component: BecomingAnArchitect },
                { path: 'defining', name: 'DefiningArchitecture', component: DefiningArchitecture },
                { path: 'arsciv', name: 'ARSCIV_X', component: ARSCIVX,
                    children: [
                        { path: '', name: 'ARSCIV_X_Overview', component: ARSCIVXOverview },
                        { path: 'roles', name: 'ARSCIV_X_Roles', component: ARSCIVXRoles },
                        { path: 'discussion', name: 'ARSCIV_X_Discussion', component: ARSCIVXDiscussion },
                        { path: 'examples', name: 'ARSCIV_X_Examples', component: ARSCIVXExamples }
                    ] },
            ]
        },
        { path: '/framework', name: 'Framework', component: Framework,
          children: [
              { path: '', name: 'FrameworkIntroduction', component: FrameworkIntroduction },
              { path: 'overview', name: 'FrameworkOverview', component: FrameworkOverview },
              { path: 'fiveDisciplines', name: 'FrameworkFiveDisciplines', component: FiveDisciplines },
              { path: 'org', name: 'FrameworkOrganizationalAlignment', component: OrganizationalAlignment },
              { path: 'tbd', name: 'UnderConstruction', component: UnderConstruction },
              { path: 'busstrat', name: 'DisciplineBusinessStrategy', component: DisciplineBusinessStrategy },
              { path: 'prodplat', name: 'DisciplinePortfolioManagement', component: DisciplinePortfolioManagement },
              { path: 'impl', name: 'DisciplineImplementation', component: DisciplineImplementation },
              { path: 'guide', name: 'DisciplineOversight', component: DisciplineOversight },
              { path: 'over', name: 'DisciplineGuidance', component: DisciplineGuidance },
          ]
        },
        { path: '/library', name: 'Library', component: Library,
            children: [
                { path: '', name: 'LibraryOverview', component: LibraryOverview },
                { path: 'jd', name: 'JobDescriptions', component: JobDescriptions,
                    children: [
                        { path: '', name: 'JobDescriptionList', component: JobDescriptionList },
                        { path: 'chiefArch', name: 'ChiefArchitectJD', component: ChiefArchitectJD }
                    ]
                },
            ]
        },

    ],
})

app.use(router)


app.mount('#app')
