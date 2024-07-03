const employeesData = [
    {
      name: "John Doe",
      department: "Customer Service",
      position: "Customer Service Representative",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "johndoe@example.com",
      phone: "555-1234"
    },
    {
      name: "Alice Johnson",
      department: "Customer Service",
      position: "Customer Service Specialist",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "alicejohnson@example.com",
      phone: "555-5678"
    },
    {
      name: "Robert Martin",
      department: "Customer Service",
      position: "Customer Service Agent",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "robertmartin@example.com",
      phone: "555-9101"
    },
    {
      name: "Jane Smith",
      department: "Rental Agents",
      position: "Senior Rental Agent",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "janesmith@example.com",
      phone: "555-1234"
    },
    {
      name: "Kevin White",
      department: "Rental Agents",
      position: "Rental Agent",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "kevinwhite@example.com",
      phone: "555-5678"
    },
    {
      name: "Laura Green",
      department: "Rental Agents",
      position: "Rental Agent",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "lauragreen@example.com",
      phone: "555-9101"
    },
    {
      name: "Carlos Reyes",
      department: "Fleet Managers",
      position: "Fleet Manager",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "carlosreyes@example.com",
      phone: "555-1122"
    },
    {
      name: "Megan Lewis",
      department: "Fleet Managers",
      position: "Assistant Fleet Manager",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "meganlewis@example.com",
      phone: "555-3344"
    },
    {
      name: "Peter Clark",
      department: "Fleet Managers",
      position: "Fleet Coordinator",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "peterclark@example.com",
      phone: "555-5566"
    },
    {
      name: "Linda Kim",
      department: "Mechanics and Maintenance Crew",
      position: "Chief Mechanic",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "lindakim@example.com",
      phone: "555-7788"
    },
    {
      name: "Daniel Walker",
      department: "Mechanics and Maintenance Crew",
      position: "Mechanic",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "danielwalker@example.com",
      phone: "555-9900"
    },
    {
      name: "Susan Lee",
      department: "Mechanics and Maintenance Crew",
      position: "Maintenance Crew Member",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "susanlee@example.com",
      phone: "555-1122"
    },
    {
      name: "Michael Brown",
      department: "Administrative Staff",
      position: "Office Administrator",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "michaelbrown@example.com",
      phone: "555-3344"
    },
    {
      name: "Jessica Taylor",
      department: "Administrative Staff",
      position: "Administrative Assistant",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "jessicataylor@example.com",
      phone: "555-5566"
    },
    {
      name: "William Harris",
      department: "Administrative Staff",
      position: "HR Specialist",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "williamharris@example.com",
      phone: "555-7788"
    },
    {
      name: "Emily Davis",
      department: "Branch Managers",
      position: "Branch Manager",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "emilydavis@example.com",
      phone: "555-9900"
    },
    {
      name: "Ryan Moore",
      department: "Branch Managers",
      position: "Assistant Branch Manager",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "ryanmoore@example.com",
      phone: "555-1122"
    },
    {
      name: "Nancy Scott",
      department: "Branch Managers",
      position: "Branch Manager",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "nancyscott@example.com",
      phone: "555-3344"
    },
    {
      name: "David Wilson",
      department: "Sales Representatives",
      position: "Sales Representative",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "davidwilson@example.com",
      phone: "555-5566"
    },
    {
      name: "Emma Hall",
      department: "Sales Representatives",
      position: "Sales Representative",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "emmahall@example.com",
      phone: "555-7788"
    },
    {
      name: "Thomas Young",
      department: "Sales Representatives",
      position: "Senior Sales Representative",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "thomasyoung@example.com",
      phone: "555-9900"
    },
    {
      name: "Anna Martinez",
      department: "Drivers",
      position: "Driver",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740g",
      email: "annamartinez@example.com",
      phone: "555-1122"
    },
    {
      name: "Mark Evans",
      department: "Drivers",
      position: "Driver",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "markevans@example.com",
      phone: "555-3344"
    },
    {
      name: "Laura Turner",
      department: "Drivers",
      position: "Senior Driver",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "lauraturner@example.com",
      phone: "555-5566"
    },
    {
      name: "James Lee",
      department: "Cleaning Crew",
      position: "Cleaning Staff",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "jameslee@example.com",
      phone: "555-7788"
    },
    {
      name: "Barbara King",
      department: "Cleaning Crew",
      position: "Cleaning Crew Leader",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "barbaraking@example.com",
      phone: "555-9900"
    },
    {
      name: "Steven Wright",
      department: "Cleaning Crew",
      position: "Cleaning Staff",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "stevenwright@example.com",
      phone: "555-1122"
    },
    {
      name: "Sophia Taylor",
      department: "Security Personnel",
      position: "Security Guard",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "sophiataylor@example.com",
      phone: "555-3344"
    },
    {
      name: "Henry Adams",
      department: "Security Personnel",
      position: "Senior Security Guard",
      avatar: "https://img.freepik.com/free-vector/young-man-with-blue-hair_24877-82124.jpg?t=st=1720000179~exp=1720003779~hmac=87fe0e55edcd1cc304df329b62c0f4ec53b67442f2795cb52821332dce4bec20&w=740",
      email: "henryadams@example.com",
      phone: "555-5566"
    },
    {
      name: "Olivia Baker",
      department: "Security Personnel",
      position: "Security Guard",
      avatar: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1720000357~exp=1720003957~hmac=584f293a25d0763105a16f1b3d681c440dcd74a1b004b07357194e1bc5065065&w=740",
      email: "oliviabaker@example.com",
      phone: "555-7788"
    }
  ];
  
  export default employeesData;
  