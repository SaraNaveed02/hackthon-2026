// App.jsx mein BrowserRouter wali line ko aise update karein:

<BrowserRouter basename="/hackthon"> 
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/login" element={<Signin />} />
    <Route path="/userdashboard" element={<UserDashboard />} />
    <Route path="/myreports" element={<MyReport />} />
    <Route path="/admindashboard" element={<AdminDashboard />} />
  </Routes>
</BrowserRouter>