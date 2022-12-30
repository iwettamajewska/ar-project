const Offer = () => {
  return (
    <div class="pricing qt3 first pricing-column">
      <h2>Konsultacja i badania</h2>
      <ul>
        <li>
          {/* <span className="help tiptip">?</span> */}
          <span className="norm-price">Badanie masy i składu ciała</span>
        </li>
        <li>
          {/* <span className="help tiptip">?</span> */}
          <span className="norm-price">Szczegółowy wywiad zdrowotny</span>
        </li>
        <li>
          {/* <span className="help tiptip">?</span> */}
          <span className="norm-price">Wykaz badań laboratoryjnych</span>
        </li>
        <li>
          {/* <span className="help tiptip">?</span> */}
          <span className="norm-price">Szczegółowy wywiad żywieniowy</span>
        </li>
        <li>
          {/* <span className="help tiptip">?</span>{" "} */}
          <span class="norm-price">Ustalenie zasad programu żywieniowego</span>
        </li>
        <li>
          {/* <span className="help tiptip">?</span>{" "} */}
          <span class="norm-price">Wstępna diagnoza i omówienie problemu</span>
        </li>
      </ul>
      <div className="data-price">
        <h5>
          <span className="price">200 zł</span>
        </h5>
        <p>
          Cena obejmuje konsultację, podczas której przeprowadzona zostanie
          analiza dzienniczka żywieniowego (ocena dotychczasowego sposobu
          żywienia) i badań laboratoryjnych, pomiary antropometryczne, analiza
          masy i składu ciała metodą bioimpedancji elektrycznej oraz wywiad
          zdrowotno-żywieniowy. Na wizycie ustalane są cele terapii i szczegóły
          dotyczące przygotowania indywidualnego programu żywieniowego. Czas
          trwania konsultacji to około 45 do 60 minut. Płatność gotówką.
        </p>
      </div>
    </div>
  );
};

export default Offer;
