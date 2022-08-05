import React, {useState , useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

const Filtersort = () => {

  const [searchParams,setsearchParams] = useSearchParams();
  const initialgenreparams = searchParams.getAll("genre");
  const [category, setcategory] = useState(initialgenreparams || []);
  const initialsortparams = searchParams.getAll("sortby");
  const [sortby, setsortby] = useState(initialsortparams[0] || "");


  const handlegenrechange = (e) => {
    const option = e.target.value;

    let newcategory = [...category];
    if(category.includes(option)){
      newcategory.splice(newcategory.indexOf(option),1)
    }
    else{
      newcategory.push(option);
    }
    setcategory(newcategory);
  };

  console.log(category);

  useEffect(() => {
    
    if(category)
    {
      setsearchParams({genre : category,
        sortby : sortby});
      
    }
    
  }, [category,setsearchParams,sortby])

  const handlesortby = (e) => {
    setsortby(e.target.value);
  }

  console.log(sortby);

  return (
    <div>
      <h3>Filter</h3>

      <div>
        <input type="checkbox" defaultChecked={category.includes('K-Pop')} value="K-Pop" onChange={handlegenrechange}/>
        <label>K-Pop</label>
      </div>

      <div>
        <input type="checkbox" defaultChecked={category.includes('Country')} value="Country" onChange={handlegenrechange} />
        <label>Country</label>
      </div>

      <div>
        <input type="checkbox" defaultChecked={category.includes('Pop')} value="Pop" onChange={handlegenrechange}/>
        <label>Pop</label>
      </div>

      <div>
        <input type="checkbox" defaultChecked={category.includes('Hard-Rock')} value="Hard-Rock" onChange={handlegenrechange}/>
        <label>Hard-Rock</label>
      </div>

      <div>
        <input type="checkbox"defaultChecked={category.includes('Holiday')} value="Holiday" onChange={handlegenrechange} />
        <label>Holiday</label>
      </div>

      <div>
        <input type="checkbox" defaultChecked={category.includes('Classical Crossover')} value="Classical Crossover" onChange={handlegenrechange}/>
        <label>Classical Crossover</label>
      </div>

      <div>
        <input type="checkbox" defaultChecked={category.includes('Singer/Songwritter')} value="Singer/Songwritter" onChange={handlegenrechange}/>
        <label>Singer/Songwritter</label>
      </div>

      <div>
        <input type="checkbox" defaultChecked={category.includes('Heavy-metal')} value="Heavy-metal" onChange={handlegenrechange} />
        <label>Heavy-metal</label>
      </div>


      <h3>Sort</h3>

<div onChange={handlesortby}>
      <div>
        <input type="radio" value="asc" name='sortby' defaultChecked={sortby === 'asc'}/>
        <label>ascending</label>
      </div>

      <div>
        <input type="radio" value="desc" name='sortby' defaultChecked={sortby === 'desc'} />
        <label>descending</label>
      </div>
      </div>

    </div>
  )
}

export default Filtersort;