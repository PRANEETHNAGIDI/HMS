import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { Dashboard } from './pages/dashboard/dashboard';
import { Dummy } from './shared/dummy/dummy';
import { Doctors } from './pages/doctors/doctors';
import { Rooms } from './pages/rooms/rooms';
import { GenerateBill } from './pages/generate-bill/generate-bill';
import { RoomShifting } from './pages/room-shifting/room-shifting';
import { PatientPayment } from './pages/patient-payment/patient-payment';
import { DischargePatient } from './pages/discharge-patient/discharge-patient';
import { ViewReports } from './pages/view-reports/view-reports';
import { AdmitPatient } from './pages/admit-patient/admit-patient';
import { Cardiology } from './pages/services/cardiology/cardiology';
import { ViewDoctor } from './view-doctor/view-doctor';
import { Orthopedics } from './pages/services/orthopedics/orthopedics';
import { Pediatrics } from './pages/services/pediatrics/pediatrics';
import { BookAppointment } from './pages/services/book-appointment/book-appointment';
import { ViewRooms } from './pages/view-rooms/view-rooms';
import { ViewPatient } from './pages/view-patient/view-patient';
import { GenerateReports } from './pages/generate-reports/generate-reports';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { PatientDashboard } from './pages/patient-dashboard/patient-dashboard';
import { PatientReports } from './pages/patient-reports/patient-reports';
import { PatientBill } from './pages/patient-bill/patient-bill';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'dashboard', component: Dashboard },
  { path: 'adminDashboard', component: AdminDashboard },
  { path: 'patientDashboard', component: PatientDashboard },

  //dashbord---------------------------
  { path: 'doctor', component: Doctors },
  { path: 'room', component: Rooms },
  { path: 'patient', component: AdmitPatient },
  { path: 'bill', component: GenerateBill },
  { path: 'room-shifting', component: RoomShifting },
  { path: 'payment', component: PatientPayment },
  { path: 'discharge', component: DischargePatient },
  { path: 'generateReports', component: GenerateReports },
  { path: 'reports', component: ViewReports},
  { path: 'viewDoctor', component: ViewDoctor},
    { path: 'viewrooms', component: ViewRooms},
    { path: 'viewPatient', component: ViewPatient},
    { path: 'viewPatientReport', component: PatientReports},
    { path: 'viewPatientBill', component: PatientBill},

  //home-------------------------------------
  { path: 'cardiology', component: Cardiology},
  { path: 'orthopedics', component: Orthopedics},
  { path: 'pediatrics', component: Pediatrics},
  //-----

  { path: 'book-appointment', component: BookAppointment},
  { path: 'dummy', component: Dummy},




];


