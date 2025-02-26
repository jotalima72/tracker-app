export interface Execution {
  week: string;
  completed: boolean;
  id: string;
  createdDate: string;
  updatedDate: string;
}

export interface Task {
  title: string;
  description: string;
  id: string;
  createdDate: string;
  updatedDate: string;
  executions: Execution[];
}

const tasks: Task[] = [
  {
    "title": "titulo",
    "description": "descrição",
    "id": "21e6b790-d8f3-4598-8c5c-6165b310947c",
    "createdDate": "2025-02-24T05:24:56.317Z", 
    "updatedDate": "2025-02-24T05:24:56.317Z",
    "executions": [
    ]
  },
  {
    "title": "titulo 2",
    "description": "descrição 2", 
    "id": "3603fcd5-0816-4e33-86f5-45f8488615b0",
    "createdDate": "2025-02-24T05:25:06.767Z",
    "updatedDate": "2025-02-24T05:25:06.767Z",
    "executions": [
    ]
  },
  {
    "title": "titulo 1",
    "description": "descrição 1",
    "id": "eee7e327-9a79-4c78-a10b-7ca53ab7bc1c",
    "createdDate": "2025-02-24T05:25:02.258Z",
    "updatedDate": "2025-02-24T05:25:02.258Z",
    "executions": [
    ]
  },
  {
    "title": "titulo com user",
    "description": "descrição com user",
    "id": "42bc1b3e-2267-4880-b682-c1ca1ab5755b",
    "createdDate": "2025-02-25T11:55:41.022Z",
    "updatedDate": "2025-02-25T11:55:41.022Z",
    "executions": [
      {
        "week": "2025-02-23",
        "completed": true,
        "id": "850f87fa-bb27-4796-8ba1-58fcce73231d",
        "createdDate": "2025-02-25T11:57:18.553Z",
        "updatedDate": "2025-02-25T11:57:18.553Z"
      }
    ]
  },
  {
    "title": "jotinha tarefas 1",
    "description": "descrição",
    "id": "259c718f-da2c-41ae-935d-596e29e40d16",
    "createdDate": "2025-02-25T18:37:25.690Z",
    "updatedDate": "2025-02-25T18:37:25.690Z",
    "executions": [
      {
        "week": "2025-02-23",
        "completed": true,
        "id": "c85ea9e5-ebf0-404d-8b0e-57b984e93009",
        "createdDate": "2025-02-25T18:38:48.603Z",
        "updatedDate": "2025-02-25T18:38:48.603Z"
      }
    ]
  },
  {
    "title": "jotinha tarefas 2",
    "description": "descrição",
    "id": "a78cf765-c1ff-4cc5-9773-a98a89adc95e",
    "createdDate": "2025-02-25T18:37:31.393Z",
    "updatedDate": "2025-02-25T18:37:31.393Z",
    "executions": [
      {
        "week": "2025-02-23",
        "completed": true,
        "id": "e42f5743-add4-4e64-ae26-b8f14efc3c66",
        "createdDate": "2025-02-25T18:39:11.332Z",
        "updatedDate": "2025-02-25T18:39:11.332Z"
      }
    ]
  },
  {
    "title": "jotinha tarefas 3",
    "description": "descrição",
    "id": "1202bbed-b9d6-4559-a485-a9180949909f",
    "createdDate": "2025-02-25T18:46:52.037Z",
    "updatedDate": "2025-02-25T18:46:52.037Z",
    "executions": [
      {
        "week": "2025-02-23",
        "completed": true,
        "id": "59089dfd-954c-4f29-a0cf-94d0447a8446",
        "createdDate": "2025-02-25T18:49:40.613Z",
        "updatedDate": "2025-02-25T18:49:40.613Z"
      }
    ]
  }
]

export async function getTasks() {
  return await tasks;
}