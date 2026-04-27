import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';


export function MainForm() {
  const {setState} = useTaskContext();
  const tsakNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(tsakNameInput.current === null) return;

    const taskName = tsakNameInput.current.value.trim();

    if(!taskName){
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interrupDate: null,
      duration: 1,
      type: 'workTme'
    };

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return{
        ...prevState,
        config:{...prevState.config},
        activeTask: newTask,
        currentCycle: 1,
        secondsRemaining,
        formattedSecondsRemainning: '00:00',
        task: [...prevState.tasks,newTask],
      }
    })


  }


  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          labelText='task'
          type='text'
          placeholder='Digite algo'
          ref={tsakNameInput}
        />
      </div>
      <div className='formRow'>
        <p>Próximo intervalo é de 25 min</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
