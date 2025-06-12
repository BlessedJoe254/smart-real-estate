import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';

// Main subsystem pages
import Dashboard from './pages/Dashboard';
import Security from './pages/Security';
import DoorLock from './pages/DoorLock';
import HVAC from './pages/HVAC';
import Lighting from './pages/Lighting';
import Irrigation from './pages/Irrigation';
import FireDetection from './pages/FireDetection';
import Blinds from './pages/Blinds';
import Energy from './pages/Energy';
import Doorbell from './pages/Doorbell';
import Poultry from './pages/Poultry';
import FishPond from './pages/FishPond';
import Fence from './pages/Fence';
import Waste from './pages/Waste';
import Clothesline from './pages/Clothesline';
import Robot from './pages/Robot';

// Dashboard detail pages
import SystemStatus from './pages/SystemStatus';
import SecurityLogs from './pages/SecurityLogs';
import EnergyStats from './pages/EnergyStats';
import WaterStats from './pages/WaterStats';

// Security subpages
import CameraFeeds from './pages/CameraFeeds';
import ToggleAlarm from './pages/ToggleAlarm';
import SensorsView from './pages/SensorsView';

// Door Lock subpages
import LockStatus from './pages/LockStatus';
import LockAccessLog from './pages/LockAccessLog';
import LockControl from './pages/LockControl';
import LockUsers from './pages/LockUsers';

// HVAC subpages
import FanSpeed from './pages/FanSpeed';
import HeatingControl from './pages/HeatingControl';
import SetTemperature from './pages/SetTemperature';
import CoolingControl from './pages/CoolingControl';

// Lighting subpages
import ToggleLights from './pages/ToggleLights';
import DaylightMode from './pages/DaylightMode';
import NightMode from './pages/NightMode';
import AccentControl from './pages/AccentControl';

// Irrigation subpages
import StartIrrigation from './pages/StartIrrigation';
import StopIrrigation from './pages/StopIrrigation';
import SetIrrigationSchedule from './pages/SetIrrigationSchedule';
import MoistureLevels from './pages/MoistureLevels';

// Fire Detection subpages
import ActivateAlarm from './pages/ActivateAlarm';
import DeactivateAlarm from './pages/DeactivateAlarm';
import FireHistory from './pages/FireHistory';
import CurrentFireStatus from './pages/CurrentFireStatus';

// Energy subpages
import EnergyUsage from './pages/EnergyUsage';
import EnergyTrends from './pages/EnergyTrends';
import BatteryStatus from './pages/BatteryStatus';

// Doorbell subpages
import DoorbellAlerts from './pages/DoorbellAlerts';
import TwoWayAudio from './pages/TwoWayAudio';
import DoorbellCamera from './pages/DoorbellCamera';

// Poultry subpages
import SetFeeding from './pages/SetFeeding';
import AdjustTemperature from './pages/AdjustTemperature';
import VentilationControl from './pages/VentilationControl';

// Fish Pond subpages
import WaterQuality from './pages/WaterQuality';
import AdjustTemp from './pages/AdjustTemp';
import FishFeedingSchedule from './pages/FishFeedingSchedule';

// Fence subpages
import FenceStatus from './pages/FenceStatus';
import FenceAlerts from './pages/FenceAlerts';
import FenceSafety from './pages/FenceSafety';

// Waste subpages
import WasteRecycling from './pages/WasteRecycling';
import WasteTrash from './pages/WasteTrash';
import WasteBattery from './pages/WasteBattery';

// Clothesline subpages
import ClotheslineControls from './pages/ClotheslineControls';
import ClotheslineWind from './pages/ClotheslineWind';
import ClotheslineWeather from './pages/ClotheslineWeather';

// ✅ Robot subpages (UPDATED and FIXED)
import VoiceControl from './pages/VoiceControl';
import AutomationControl from './pages/AutomationControl';
import RequestAssistance from './pages/RequestAssistance';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-900 text-white">
        <Sidebar />
        <main className="flex-grow p-8 overflow-auto">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/security" element={<Security />} />
            <Route path="/door-lock" element={<DoorLock />} />
            <Route path="/hvac" element={<HVAC />} />
            <Route path="/lighting" element={<Lighting />} />
            <Route path="/irrigation" element={<Irrigation />} />
            <Route path="/fire-detection" element={<FireDetection />} />
            <Route path="/blinds" element={<Blinds />} />
            <Route path="/energy" element={<Energy />} />
            <Route path="/doorbell" element={<Doorbell />} />
            <Route path="/poultry" element={<Poultry />} />
            <Route path="/fish-pond" element={<FishPond />} />
            <Route path="/fence" element={<Fence />} />
            <Route path="/waste" element={<Waste />} />
            <Route path="/clothesline" element={<Clothesline />} />
            <Route path="/robot" element={<Robot />} />

            {/* Dashboard Subpages */}
            <Route path="/system-status" element={<SystemStatus />} />
            <Route path="/security-logs" element={<SecurityLogs />} />
            <Route path="/energy-stats" element={<EnergyStats />} />
            <Route path="/water-stats" element={<WaterStats />} />

            {/* Security Subpages */}
            <Route path="/view-camera-feeds" element={<CameraFeeds />} />
            <Route path="/toggle-alarm" element={<ToggleAlarm />} />
            <Route path="/view-sensors" element={<SensorsView />} />

            {/* Door Lock Subpages */}
            <Route path="/lock-status" element={<LockStatus />} />
            <Route path="/lock-access-logs" element={<LockAccessLog />} />
            <Route path="/remote-lock-control" element={<LockControl />} />
            <Route path="/manage-lock-users" element={<LockUsers />} />

            {/* HVAC Subpages */}
            <Route path="/fan-speed" element={<FanSpeed />} />
            <Route path="/heating-control" element={<HeatingControl />} />
            <Route path="/set-temperature" element={<SetTemperature />} />
            <Route path="/cooling-control" element={<CoolingControl />} />

            {/* Lighting Subpages */}
            <Route path="/toggle-lights" element={<ToggleLights />} />
            <Route path="/daylight-mode" element={<DaylightMode />} />
            <Route path="/night-mode" element={<NightMode />} />
            <Route path="/accent-control" element={<AccentControl />} />

            {/* Irrigation Subpages */}
            <Route path="/start-irrigation" element={<StartIrrigation />} />
            <Route path="/stop-irrigation" element={<StopIrrigation />} />
            <Route path="/set-irrigation-schedule" element={<SetIrrigationSchedule />} />
            <Route path="/moisture-levels" element={<MoistureLevels />} />

            {/* Fire Detection Subpages */}
            <Route path="/activate-alarm" element={<ActivateAlarm />} />
            <Route path="/deactivate-alarm" element={<DeactivateAlarm />} />
            <Route path="/fire-history" element={<FireHistory />} />
            <Route path="/current-fire-status" element={<CurrentFireStatus />} />

            {/* Energy Subpages */}
            <Route path="/energy-usage" element={<EnergyUsage />} />
            <Route path="/energy-trends" element={<EnergyTrends />} />
            <Route path="/battery-status" element={<BatteryStatus />} />

            {/* Doorbell Subpages */}
            <Route path="/doorbell-alerts" element={<DoorbellAlerts />} />
            <Route path="/two-way-audio" element={<TwoWayAudio />} />
            <Route path="/doorbell-camera" element={<DoorbellCamera />} />

            {/* Poultry Subpages */}
            <Route path="/set-feeding" element={<SetFeeding />} />
            <Route path="/adjust-temperature" element={<AdjustTemperature />} />
            <Route path="/ventilation-control" element={<VentilationControl />} />

            {/* Fish Pond Subpages */}
            <Route path="/water-quality" element={<WaterQuality />} />
            <Route path="/adjust-temp" element={<AdjustTemp />} />
            <Route path="/fish-feeding-schedule" element={<FishFeedingSchedule />} />

            {/* Fence Subpages */}
            <Route path="/fence-status" element={<FenceStatus />} />
            <Route path="/fence-alerts" element={<FenceAlerts />} />
            <Route path="/fence-safety" element={<FenceSafety />} />

            {/* Waste Subpages */}
            <Route path="/waste-recycling" element={<WasteRecycling />} />
            <Route path="/waste-trash" element={<WasteTrash />} />
            <Route path="/waste-battery" element={<WasteBattery />} />

            {/* Clothesline Subpages */}
            <Route path="/clothesline-controls" element={<ClotheslineControls />} />
            <Route path="/clothesline-wind" element={<ClotheslineWind />} />
            <Route path="/clothesline-weather" element={<ClotheslineWeather />} />

            {/* ✅ Robot Subpages (MATCHED to BUTTONS) */}
            <Route path="/robot-voice-control" element={<VoiceControl />} />
            <Route path="/robot-tasks" element={<AutomationControl />} />
            <Route path="/robot-movement" element={<RequestAssistance />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
