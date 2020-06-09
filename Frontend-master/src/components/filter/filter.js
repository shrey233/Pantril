import React from "react";
import {
  Button,
  ButtonGroup,
  CustomInput,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import { AllergenType } from "../../model/allergenType";
import { LifestyleType } from "../../model/lifestyleType";
import { withRouter } from "react-router-dom";
import styles from "./filter.module.css";

const Filter = ({ history }) => {
  const [filterExclude, setFilterExclude] = React.useState([]);
  const [filterInclude, setFilterInclude] = React.useState([]);

  const [mayContain, setMayContain] = React.useState(false);

  const [store, setStore] = React.useState("I want to shop at");
  const [avoidanceOpen, setAvoidanceOpen] = React.useState(true);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onAllergenSelected = selected => {
    const index = filterExclude.indexOf(selected);
    if (index < 0) {
      filterExclude.push(selected);
    } else {
      filterExclude.splice(index, 1);
    }
    setFilterExclude([...filterExclude]);
  };

  const onLifestyleSelected = selected => {
    const index = filterInclude.indexOf(selected);
    if (index < 0) {
      filterInclude.push(selected);
    } else {
      filterInclude.splice(index, 1);
    }
    setFilterInclude([...filterInclude]);
  };

  const toggle = () => setIsModalOpen(!isModalOpen);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <div className={styles.filterSection}>
      <Modal isOpen={isModalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          <strong>NOTE</strong>
        </ModalHeader>
        <ModalBody>
          We do our best to filter out this ingredient and hidden names but
          cannot guarantee may-contain. You must always read product labels
        </ModalBody>
      </Modal>

      <Button
        className={styles.link}
        color="link"
        onClick={() => setAvoidanceOpen(!avoidanceOpen)}
      >
        Avoidance
      </Button>
      <span className={styles.subLink}>Tell us food you want to avoid</span>

      <Collapse className={styles.avoidance} isOpen={true}>
        <ButtonGroup className={styles.filters}>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.Egg)}
            active={filterExclude.includes(AllergenType.Egg)}
          >
            Egg
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.Milk)}
            active={filterExclude.includes(AllergenType.Milk)}
          >
            Dairy
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.Peanuts)}
            active={filterExclude.includes(AllergenType.Peanuts)}
          >
            Peanuts
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.TreeNuts)}
            active={filterExclude.includes(AllergenType.TreeNuts)}
          >
            Tree Nuts
          </Button>
        </ButtonGroup>

        <ButtonGroup className={styles.filters}>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.Soy)}
            active={filterExclude.includes(AllergenType.Soy)}
          >
            Soy
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.Sesame)}
            active={filterExclude.includes(AllergenType.Sesame)}
          >
            Sesame
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.Fish)}
            active={filterExclude.includes(AllergenType.Fish)}
          >
            Fish
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.Crustacean)}
            active={filterExclude.includes(AllergenType.Crustacean)}
          >
            Crustacean
          </Button>
        </ButtonGroup>

        <ButtonGroup className={styles.filters}>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.Molluscs)}
            active={filterExclude.includes(AllergenType.Molluscs)}
          >
            Molluscs
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.Sulphites)}
            active={filterExclude.includes(AllergenType.Sulphites)}
          >
            Sulphites
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.Wheat)}
            active={filterExclude.includes(AllergenType.Wheat)}
          >
            Wheat
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.Gluten)}
            active={filterExclude.includes(AllergenType.Gluten)}
          >
            Gluten
          </Button>
        </ButtonGroup>

        <ButtonGroup className={styles.filters}>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.Celery)}
            active={filterExclude.includes(AllergenType.Celery)}
          >
            Celery
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onAllergenSelected(AllergenType.Lupin)}
            active={filterExclude.includes(AllergenType.Lupin)}
          >
            Lupin
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => {
              onAllergenSelected(AllergenType.PalmOil);
              toggle();
            }}
            active={filterExclude.includes(AllergenType.PalmOil)}
          >
            Palm Oil
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => {
              onAllergenSelected(AllergenType.MSG);
              toggle();
            }}
            active={filterExclude.includes(AllergenType.MSG)}
          >
            MSG
          </Button>
        </ButtonGroup>

        <ButtonGroup className={styles.filters}>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => {
              onAllergenSelected(AllergenType.Onion);
              onAllergenSelected(AllergenType.Garlic);
              toggle();
            }}
            active={filterExclude.includes(AllergenType.Onion)}
          >
            Onion &amp; Garlic (allium family)
          </Button>
        </ButtonGroup>

        <CustomInput
          checked={mayContain}
          className={styles.mayContain}
          id="mayContain"
          name="mayContain"
          type="switch"
          label="Exclude May Contain"
          onChange={() => setMayContain(!mayContain)}
        />
      </Collapse>

      <Button
        className={styles.link}
        color="link"
        onClick={() => setAvoidanceOpen(!avoidanceOpen)}
      >
        Lifestyle
      </Button>
      <span className={styles.subLink}>Choose your food/diet preference</span>

      <Collapse className={styles.avoidance} isOpen={true}>
        <ButtonGroup className={styles.filters}>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onLifestyleSelected(LifestyleType.Vegan)}
            active={filterInclude.includes(LifestyleType.Vegan)}
          >
            Vegan
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onLifestyleSelected(LifestyleType.Vegetarian)}
            active={filterInclude.includes(LifestyleType.Vegetarian)}
          >
            Vegetarian
          </Button>
        </ButtonGroup>

        <ButtonGroup className={styles.filters}>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onLifestyleSelected(LifestyleType.Kosher)}
            active={filterInclude.includes(LifestyleType.Kosher)}
          >
            Kosher
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onLifestyleSelected(LifestyleType.Organic)}
            active={filterInclude.includes(LifestyleType.Organic)}
          >
            Organic
          </Button>
        </ButtonGroup>
        
        {/* <ButtonGroup className={styles.filters}>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onLifestyleSelected(LifestyleType.LowSalt)}
            active={filterInclude.includes(LifestyleType.LowSalt)}
          >
            Low Salt
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onLifestyleSelected(LifestyleType.Iron)}
            active={filterInclude.includes(LifestyleType.Iron)}
          >
            Iron
          </Button>
       
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onLifestyleSelected(LifestyleType.LowSugar)}
            active={filterInclude.includes(LifestyleType.LowSugar)}
          >
            Low Sugar
          </Button>
        </ButtonGroup>

        <ButtonGroup className={styles.filters}>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onLifestyleSelected(LifestyleType.Niacin)}
            active={filterInclude.includes(LifestyleType.Niacin)}
          >
            Niacin <span className={styles.long}>(Vitamin B3)</span>
            <span className={styles.short}>(V B3)</span>
          </Button>

          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onLifestyleSelected(LifestyleType.Thiamin)}
            active={filterInclude.includes(LifestyleType.Thiamin)}
          >
            Thiamin <span className={styles.long}>(Vitamin B1)</span>
            <span className={styles.short}>(V B1)</span>
          </Button>
        </ButtonGroup>

        <ButtonGroup className={styles.filters}>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onLifestyleSelected(LifestyleType.Mineral)}
            active={filterInclude.includes(LifestyleType.Mineral)}
          >
            Mineral
          </Button>
          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onLifestyleSelected(LifestyleType.FolicAcid)}
            active={filterInclude.includes(LifestyleType.FolicAcid)}
          >
            Folic Acid <span className={styles.long}>(Vitamin B9)</span>
            <span className={styles.short}>(V B9)</span>
          </Button>

          <Button
            className={styles.filterButton}
            color="info"
            outline
            onClick={() => onLifestyleSelected(LifestyleType.Calcium)}
            active={filterInclude.includes(LifestyleType.Calcium)}
          >
            Calcium
          </Button>
        </ButtonGroup> */}
      </Collapse>

      <div className={styles.chooseStore}>
        <UncontrolledDropdown>
          <DropdownToggle outline caret>
            {store}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setStore("Woolworth")}>
              Woolworths
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>

      <Button
        color="info"
        size="lg"
        onClick={() =>
          history.push(
            `/categories/${JSON.stringify({
              allergens: filterExclude,
              mayContain: mayContain,
              lifestyle: filterInclude
            })}`
          )
        }
      >
        Search
      </Button>

      <Button
        color="info"
        size="lg"
        onClick={() =>
          history.push(
            `/recipepremium/({
            
            })}`
          )
        }
      >
        Search Recipes
      </Button>
    </div>
  );
};

export default withRouter(Filter);
