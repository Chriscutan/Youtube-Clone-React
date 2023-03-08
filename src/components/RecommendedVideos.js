import React from "react";
import "../components/RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          image="https://imgs.search.brave.com/yUCxF6-jaPo9zp3S5EgpbHDWJz9dwbsYxdJtifijHQs/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tRmJaOHA2dElH/d2cvWGNMZmluMzZY/bEkvQUFBQUFBQUFH/WDQvMzk3LWpYaWZ3/WXd1NlZKRmRVYW9K/NjVqMXNBRjRsY1RB/Q0xjQkdBc1lIUS9z/MTYwMC9sZWFybiUy/QnJlYWN0LnBuZw"
          channelImage="https://imgs.search.brave.com/ipyMF9OFciokpxyfknbD6pzeND99iv3VK9Q9HHhcc7I/rs:fit:768:438:1/g:ce/aHR0cHM6Ly9pbnRl/cmFjdGl2ZWNhcmVz/LWNvdXJzZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA4L0VrcmFuLVJl/c21pLTIwMTktMTEt/MTgtMTguMDguMTMt/NzY4eDQzOC5wbmc"
          channel="All About React"
          title="Learn React Basics in 10 mins"
          views="1M"
          timestamp="5 days ago"
        />
        <VideoCard
          image="https://imgs.search.brave.com/X644zS2oyig8vrkrLJQntlg9Zk5kDFhnrosdLLTEibA/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9zdG9y/ZS1pbWFnZXMucy1t/aWNyb3NvZnQuY29t/L2ltYWdlL2FwcHMu/NTg3NTguMTQxNDY1/MTU0MzMzODU1NjIu/MzE1NGViNTMtYjZk/Ny00MWMwLWFmNmQt/N2ViY2Q4ZmU4OGY3/Ljg0MGVmMDA4LTBl/MTYtNGI4Yy04MjFm/LTU5NjNhZDU5NmZm/OD9tb2RlPXNjYWxl/JnE9OTAmaD0xMDgw/Jnc9MTkyMA"
          channelImage="https://imgs.search.brave.com/VaxW-k8bUeWHJHtCpY2Ro-nHEJsar6IpZj7PQPKCCJU/rs:fit:807:700:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg4LzQw/LzNhLzg4NDAzYWRi/MmNjMmNlZDEwNTk5/YzU3YzI2ZmI5ZTcy/LmpwZw"
          channel="MongoDB Advanced"
          title="Learn MongoDB Advanced in 5 hrs"
          views="4.2K"
          timestamp="2 days ago"
        />
        <VideoCard
          image="https://imgs.search.brave.com/yUCxF6-jaPo9zp3S5EgpbHDWJz9dwbsYxdJtifijHQs/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tRmJaOHA2dElH/d2cvWGNMZmluMzZY/bEkvQUFBQUFBQUFH/WDQvMzk3LWpYaWZ3/WXd1NlZKRmRVYW9K/NjVqMXNBRjRsY1RB/Q0xjQkdBc1lIUS9z/MTYwMC9sZWFybiUy/QnJlYWN0LnBuZw"
          channelImage="https://imgs.search.brave.com/ipyMF9OFciokpxyfknbD6pzeND99iv3VK9Q9HHhcc7I/rs:fit:768:438:1/g:ce/aHR0cHM6Ly9pbnRl/cmFjdGl2ZWNhcmVz/LWNvdXJzZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA4L0VrcmFuLVJl/c21pLTIwMTktMTEt/MTgtMTguMDguMTMt/NzY4eDQzOC5wbmc"
          channel="All About React"
          title="Learn React Basics in 10 mins"
          views="1M"
          timestamp="5 days ago"
        />
        <VideoCard
          image="https://imgs.search.brave.com/X644zS2oyig8vrkrLJQntlg9Zk5kDFhnrosdLLTEibA/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9zdG9y/ZS1pbWFnZXMucy1t/aWNyb3NvZnQuY29t/L2ltYWdlL2FwcHMu/NTg3NTguMTQxNDY1/MTU0MzMzODU1NjIu/MzE1NGViNTMtYjZk/Ny00MWMwLWFmNmQt/N2ViY2Q4ZmU4OGY3/Ljg0MGVmMDA4LTBl/MTYtNGI4Yy04MjFm/LTU5NjNhZDU5NmZm/OD9tb2RlPXNjYWxl/JnE9OTAmaD0xMDgw/Jnc9MTkyMA"
          channelImage="https://imgs.search.brave.com/VaxW-k8bUeWHJHtCpY2Ro-nHEJsar6IpZj7PQPKCCJU/rs:fit:807:700:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg4LzQw/LzNhLzg4NDAzYWRi/MmNjMmNlZDEwNTk5/YzU3YzI2ZmI5ZTcy/LmpwZw"
          channel="MongoDB Advanced"
          title="Learn MongoDB Advanced in 5 hrs"
          views="4.2K"
          timestamp="2 days ago"
        />
        <VideoCard
          image="https://imgs.search.brave.com/yUCxF6-jaPo9zp3S5EgpbHDWJz9dwbsYxdJtifijHQs/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tRmJaOHA2dElH/d2cvWGNMZmluMzZY/bEkvQUFBQUFBQUFH/WDQvMzk3LWpYaWZ3/WXd1NlZKRmRVYW9K/NjVqMXNBRjRsY1RB/Q0xjQkdBc1lIUS9z/MTYwMC9sZWFybiUy/QnJlYWN0LnBuZw"
          channelImage="https://imgs.search.brave.com/ipyMF9OFciokpxyfknbD6pzeND99iv3VK9Q9HHhcc7I/rs:fit:768:438:1/g:ce/aHR0cHM6Ly9pbnRl/cmFjdGl2ZWNhcmVz/LWNvdXJzZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA4L0VrcmFuLVJl/c21pLTIwMTktMTEt/MTgtMTguMDguMTMt/NzY4eDQzOC5wbmc"
          channel="All About React"
          title="Learn React Basics in 10 mins"
          views="1M"
          timestamp="5 days ago"
        />
        <VideoCard
          image="https://imgs.search.brave.com/X644zS2oyig8vrkrLJQntlg9Zk5kDFhnrosdLLTEibA/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9zdG9y/ZS1pbWFnZXMucy1t/aWNyb3NvZnQuY29t/L2ltYWdlL2FwcHMu/NTg3NTguMTQxNDY1/MTU0MzMzODU1NjIu/MzE1NGViNTMtYjZk/Ny00MWMwLWFmNmQt/N2ViY2Q4ZmU4OGY3/Ljg0MGVmMDA4LTBl/MTYtNGI4Yy04MjFm/LTU5NjNhZDU5NmZm/OD9tb2RlPXNjYWxl/JnE9OTAmaD0xMDgw/Jnc9MTkyMA"
          channelImage="https://imgs.search.brave.com/VaxW-k8bUeWHJHtCpY2Ro-nHEJsar6IpZj7PQPKCCJU/rs:fit:807:700:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg4LzQw/LzNhLzg4NDAzYWRi/MmNjMmNlZDEwNTk5/YzU3YzI2ZmI5ZTcy/LmpwZw"
          channel="MongoDB Advanced"
          title="Learn MongoDB Advanced in 5 hrs"
          views="4.2K"
          timestamp="2 days ago"
        />
        <VideoCard
          image="https://imgs.search.brave.com/yUCxF6-jaPo9zp3S5EgpbHDWJz9dwbsYxdJtifijHQs/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tRmJaOHA2dElH/d2cvWGNMZmluMzZY/bEkvQUFBQUFBQUFH/WDQvMzk3LWpYaWZ3/WXd1NlZKRmRVYW9K/NjVqMXNBRjRsY1RB/Q0xjQkdBc1lIUS9z/MTYwMC9sZWFybiUy/QnJlYWN0LnBuZw"
          channelImage="https://imgs.search.brave.com/ipyMF9OFciokpxyfknbD6pzeND99iv3VK9Q9HHhcc7I/rs:fit:768:438:1/g:ce/aHR0cHM6Ly9pbnRl/cmFjdGl2ZWNhcmVz/LWNvdXJzZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA4L0VrcmFuLVJl/c21pLTIwMTktMTEt/MTgtMTguMDguMTMt/NzY4eDQzOC5wbmc"
          channel="All About React"
          title="Learn React Basics in 10 mins"
          views="1M"
          timestamp="5 days ago"
        />
        <VideoCard
          image="https://imgs.search.brave.com/X644zS2oyig8vrkrLJQntlg9Zk5kDFhnrosdLLTEibA/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9zdG9y/ZS1pbWFnZXMucy1t/aWNyb3NvZnQuY29t/L2ltYWdlL2FwcHMu/NTg3NTguMTQxNDY1/MTU0MzMzODU1NjIu/MzE1NGViNTMtYjZk/Ny00MWMwLWFmNmQt/N2ViY2Q4ZmU4OGY3/Ljg0MGVmMDA4LTBl/MTYtNGI4Yy04MjFm/LTU5NjNhZDU5NmZm/OD9tb2RlPXNjYWxl/JnE9OTAmaD0xMDgw/Jnc9MTkyMA"
          channelImage="https://imgs.search.brave.com/VaxW-k8bUeWHJHtCpY2Ro-nHEJsar6IpZj7PQPKCCJU/rs:fit:807:700:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg4LzQw/LzNhLzg4NDAzYWRi/MmNjMmNlZDEwNTk5/YzU3YzI2ZmI5ZTcy/LmpwZw"
          channel="MongoDB Advanced"
          title="Learn MongoDB Advanced in 5 hrs"
          views="4.2K"
          timestamp="2 days ago"
        />
        <VideoCard
          image="https://imgs.search.brave.com/yUCxF6-jaPo9zp3S5EgpbHDWJz9dwbsYxdJtifijHQs/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tRmJaOHA2dElH/d2cvWGNMZmluMzZY/bEkvQUFBQUFBQUFH/WDQvMzk3LWpYaWZ3/WXd1NlZKRmRVYW9K/NjVqMXNBRjRsY1RB/Q0xjQkdBc1lIUS9z/MTYwMC9sZWFybiUy/QnJlYWN0LnBuZw"
          channelImage="https://imgs.search.brave.com/ipyMF9OFciokpxyfknbD6pzeND99iv3VK9Q9HHhcc7I/rs:fit:768:438:1/g:ce/aHR0cHM6Ly9pbnRl/cmFjdGl2ZWNhcmVz/LWNvdXJzZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA4L0VrcmFuLVJl/c21pLTIwMTktMTEt/MTgtMTguMDguMTMt/NzY4eDQzOC5wbmc"
          channel="All About React"
          title="Learn React Basics in 10 mins"
          views="1M"
          timestamp="5 days ago"
        />
        <VideoCard
          image="https://imgs.search.brave.com/X644zS2oyig8vrkrLJQntlg9Zk5kDFhnrosdLLTEibA/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9zdG9y/ZS1pbWFnZXMucy1t/aWNyb3NvZnQuY29t/L2ltYWdlL2FwcHMu/NTg3NTguMTQxNDY1/MTU0MzMzODU1NjIu/MzE1NGViNTMtYjZk/Ny00MWMwLWFmNmQt/N2ViY2Q4ZmU4OGY3/Ljg0MGVmMDA4LTBl/MTYtNGI4Yy04MjFm/LTU5NjNhZDU5NmZm/OD9tb2RlPXNjYWxl/JnE9OTAmaD0xMDgw/Jnc9MTkyMA"
          channelImage="https://imgs.search.brave.com/VaxW-k8bUeWHJHtCpY2Ro-nHEJsar6IpZj7PQPKCCJU/rs:fit:807:700:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg4LzQw/LzNhLzg4NDAzYWRi/MmNjMmNlZDEwNTk5/YzU3YzI2ZmI5ZTcy/LmpwZw"
          channel="MongoDB Advanced"
          title="Learn MongoDB Advanced in 5 hrs"
          views="4.2K"
          timestamp="2 days ago"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
