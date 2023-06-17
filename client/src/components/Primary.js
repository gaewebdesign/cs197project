
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const Menu = [
    { label: 1, value: "Transportation"  },
    { label: 2, value: "Communications"  },
    { label: 3, value: "Engineering"  },
    { label: 4, value: "Search and Rescue"  },
    { label: 5, value: "Education"  },
    { label: 6, value: "Energy"  },
    { label: 7, value: "Firefighting"  },
    { label: 8, value: "Human Services"  }
  ]

const Primary = () => {
    return(
    <div>
    <div class="container-sm Function">
    <div class="row">
    <div class="col-sm-4 TextBox"> Primary Function</div>
    <div class="col-sm-8 Primary">

            <select>
              {
                      Menu.map(
                            (option) => {
                             return (
                              <option value={option.label}>{option.value}</option>
                             )
                            }
                      )
              }
            
            </select>
    
    </div>
    </div>
    </div>




    </div>


 )      




}


export {Primary}