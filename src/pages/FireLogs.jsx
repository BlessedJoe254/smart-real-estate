// src/pages/FireLogs.jsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function FireLogs() {
  const [logs] = useState([
    { id: 1, timestamp: "2025-06-11 14:30", message: "Smoke detected in Kitchen." },
    { id: 2, timestamp: "2025-06-11 14:35", message: "Fire alarm activated." },
    { id: 3, timestamp: "2025-06-11 14:40", message: "Sprinklers engaged in Living Room." },
    { id: 4, timestamp: "2025-06-11 14:45", message: "Emergency services notified." },
  ]);

  return (
    <div className="flex flex-col min-h-screen p-4 bg-gray-900 text-white">
      <div className="flex items-center space-x-2 mb-4">
        <Link to="/fire-detection">
          <Button variant="outline" className="flex items-center gap-2 rounded-2xl px-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Fire Detection
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Fire Logs</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {logs.map((log) => (
          <Card key={log.id} className="bg-gray-800 text-white rounded-2xl shadow-md">
            <CardContent className="p-4 space-y-2">
              <p className="text-sm text-gray-400">{log.timestamp}</p>
              <p className="font-medium">{log.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
