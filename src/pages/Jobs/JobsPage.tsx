"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TextField, Button, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Job {
  id: number;
  title: string;
  company: string;
  status: string;
  dateApplied: string;
  notes: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      status: "Pending",
      dateApplied: "2024-12-01",
      notes: "Follow up next week",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "InnovateX",
      status: "Interview Scheduled",
      dateApplied: "2024-12-05",
      notes: "Prepare system design questions",
    },
  ]);
  const [newJob, setNewJob] = useState<Job>({
    id: 0,
    title: "",
    company: "",
    status: "",
    dateApplied: "",
    notes: "",
  });
  const [search, setSearch] = useState("");

  // Handle adding a new job
  const handleAddJob = () => {
    if (newJob.title && newJob.company) {
      setJobs([
        ...jobs,
        { ...newJob, id: jobs.length + 1 },
      ]);
      setNewJob({
        id: 0,
        title: "",
        company: "",
        status: "",
        dateApplied: "",
        notes: "",
      });
    }
  };

  // Filter jobs based on search input
  const filteredJobs = jobs.filter((job) =>
    Object.values(job)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Columns for the MUI DataGrid
  const columns: GridColDef[] = [
    { field: "title", headerName: "Job Title", width: 200 },
    { field: "company", headerName: "Company", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "dateApplied", headerName: "Date Applied", width: 150 },
    { field: "notes", headerName: "Notes", width: 300 },
  ];

  return (
    <div className="w-screen mx-auto flex justify-center">
      <Box sx={{ maxWidth: "900px", mx: "auto", py: 4 }}>
        <Tabs defaultValue="all-jobs">
          {/* Tabs Navigation */}
          <TabsList className="mb-4">
            <TabsTrigger value="all-jobs">All Jobs</TabsTrigger>
            <TabsTrigger value="add-job">Add Job</TabsTrigger>
          </TabsList>

          {/* Add Job Tab */}
          <TabsContent value="add-job">
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Job Title"
                variant="outlined"
                value={newJob.title}
                onChange={(e) =>
                  setNewJob({ ...newJob, title: e.target.value })
                }
                fullWidth
              />
              <TextField
                label="Company Name"
                variant="outlined"
                value={newJob.company}
                onChange={(e) =>
                  setNewJob({ ...newJob, company: e.target.value })
                }
                fullWidth
              />
              <TextField
                label="Status"
                variant="outlined"
                value={newJob.status}
                onChange={(e) =>
                  setNewJob({ ...newJob, status: e.target.value })
                }
                fullWidth
              />
              <TextField
                label="Date Applied"
                type="date"
                variant="outlined"
                value={newJob.dateApplied}
                onChange={(e) =>
                  setNewJob({ ...newJob, dateApplied: e.target.value })
                }
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Notes"
                variant="outlined"
                value={newJob.notes}
                onChange={(e) =>
                  setNewJob({ ...newJob, notes: e.target.value })
                }
                fullWidth
                multiline
              />
              <Button variant="contained" onClick={handleAddJob}>
                Add Job
              </Button>
            </Box>
          </TabsContent>

          {/* All Jobs Tab */}
          <TabsContent value="all-jobs">
            <Box
              sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}
            >
              <TextField
                label="Search"
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth
                sx={{ maxWidth: "400px" }}
              />
            </Box>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={filteredJobs}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { pageSize: 5, page: 0 },
                  },
                }}
                pageSizeOptions={[5, 10]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </Box>
    </div>
  );
}
