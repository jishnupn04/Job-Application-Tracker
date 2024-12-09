import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faHeart,
  faComments,
  faClock,
  faChartLine,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons"; // Import icons
import { Chart } from "./Chart";

const Dashboard = () => {
  return (
    <div className="absolute flex w-full min-h-screen overflow-y-auto align  top-0 items-center justify-center">
      <main className="flex-1 w-full max-w-7xl mx-auto p-6 pt-20">
        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="flex space-x-2 justify-center bg-transparent">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:col-span-2">
                {[
                  {
                    title: "Total Applications",
                    description: "+10% from last month",
                    value: "24",
                    icon: faFileAlt,
                    color: "text-blue-500",
                  },
                  {
                    title: "Wishlisted",
                    description: "+180.1% from last month",
                    value: "5",
                    icon: faHeart,
                    color: "text-red-500",
                  },
                  {
                    title: "Interviews",
                    description: "+19% from last month",
                    value: "2",
                    icon: faComments,
                    color: "text-green-500",
                  },
                  {
                    title: "Pending Response",
                    description: "+5% from last month",
                    value: "3",
                    icon: faClock,
                    color: "text-yellow-500",
                  },
                  {
                    title: "Success Rate",
                    description: "+25% from last month",
                    value: "35%",
                    icon: faChartLine,
                    color: "text-green-500",
                  },
                  {
                    title: "Completed Tasks",
                    description: "+50% from last month",
                    value: "42",
                    icon: faCheckCircle,
                    color: "text-purple-500",
                  },
                ].map((card, index) => (
                  <Card
                    key={index}
                    className="h-48 flex flex-col justify-center items-center"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FontAwesomeIcon
                          icon={card.icon}
                          className={`mr-2 ${card.color}`}
                        />
                        {card.title}
                      </CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center items-center">
                      <p className="text-2xl font-bold">{card.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Chart */}
              <div className="sm:col-span-1 flex items-center">
                <div className="w-full h-full border rounded-lg shadow-md">
                  <Chart />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
