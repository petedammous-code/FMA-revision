---
id: rfx-res-integrale-trigo-coupure
type: reflexe
situation: Calculer une intégrale trigonométrique sur [0, 2π] ou une intégrale sur ]0, +∞[ contenant une puissance x^α ou un logarithme
chapters: [1, 2]
---
## Situation

Deux familles d'énoncés, qui se traitent toutes les deux par la formule des résidus mais **pas** avec le demi-disque :

* (a) $\int_0^{2\pi}F(\cos\theta,\sin\theta)\,d\theta$ avec $F$ rationnelle, sans pôle pour $\theta$ réel (exemples : $\frac{1}{a+b\cos\theta}$ avec $a>|b|$, $\frac{\cos(n\theta)}{a+b\cos\theta}$, $\frac{\sin^2\theta}{a+b\cos\theta}$) ;
* (b) une intégrale sur $]0,+\infty[$ **non réductible** à $\int_{\R}$ : $\int_0^{+\infty}x^{\alpha-1}R(x)\,dx$ ($\alpha\notin\Z$), $\int_0^{+\infty}R(x)\ln x\,dx$, $\int_0^{+\infty}R(x)\,dx$ avec $R$ non paire, $\int_0^{+\infty}\frac{dx}{1+x^n}$.

Mots-clés : *on pose $z=e^{i\theta}$*, *détermination du logarithme sur $\C\setminus\R_+$*, *contour en trou de serrure*, *secteur angulaire d'ouverture $2\pi/n$*, *$z^{\alpha}=e^{\alpha\,\mathrm{Log}\,z}$*.

## Options

### [x] Substitution $z=e^{i\theta}$ et résidus dans le disque unité — [[ch01-integrale-sur-cercle]]
**Quand.** Intégrande rationnel en $\cos\theta,\sin\theta$, intégré sur une **période complète** ($[0,2\pi]$ ou $[-\pi,\pi]$) ; sur $[0,\pi]$ si l'intégrande ne dépend que de $\cos\theta$ (alors $\int_0^\pi=\frac12\int_0^{2\pi}$ par $\theta\mapsto2\pi-\theta$).
**Justification.** Exemple I.5.5 : $\int_{C(0,1)}g(z)\,dz=i\int_0^{2\pi}g(e^{i\theta})e^{i\theta}d\theta$ (poly, Exemple I.5.5, p. 16). Avec $\cos\theta=\frac{z+z^{-1}}2$, $\sin\theta=\frac{z-z^{-1}}{2i}$, $d\theta=\frac{dz}{iz}$, on obtient $\int_0^{2\pi}F=\int_{C(0,1)}F\big(\tfrac{z+z^{-1}}2,\tfrac{z-z^{-1}}{2i}\big)\frac{dz}{iz}=2i\pi\sum_{|s|<1}\Res_s(\cdots)$ par [[ch02-formule-residus-pratique]].
**Pièges.** Ne garder que les pôles de module $<1$ (les racines d'un trinôme réciproque vont par paires $s,1/s$) ; ne pas oublier le pôle en $0$ créé par $1/z$ ou par les $z^{-n}$. Pour $\cos(n\theta)$ au numérateur, remplacer par $\Re(e^{in\theta})$ (si le reste est réel) plutôt que par $\frac{z^n+z^{-n}}2$, qui crée un pôle d'ordre $n$ en $0$.

### [x] Contour en trou de serrure — [[ch02-exemple-trou-de-serrure]]
**Quand.** $\int_0^{+\infty}x^{\alpha-1}R(x)\,dx$ avec $\alpha\notin\Z$ ; ou $\int_0^{+\infty}R(x)\,dx$ avec $R$ non paire (on intègre $R(z)\,\mathrm{Log}\,z$) ; ou $\int_0^{+\infty}R(x)\ln x\,dx$ (on intègre $R(z)(\mathrm{Log}\,z)^2$). Hypothèses à vérifier : $R$ sans pôle sur $[0,+\infty[$, convergence en $0$ et en $+\infty$ (conditions sur $\alpha$ et sur $\deg Q-\deg P$).
**Justification.** Avec la détermination d'argument dans $]0,2\pi[$ sur $\C\setminus\R_+$, les deux bords de la coupure portent des valeurs différentes : $z^{\alpha-1}$ est multiplié par $e^{2i\pi\alpha}$, $\mathrm{Log}\,z$ augmente de $2i\pi$. L'intégrale cherchée survit dans la différence : $(1-e^{2i\pi\alpha})J$, ou $-2i\pi J$ (poly, Exemple II.9.7, p. 57).
**Pièges.** Avec $R(z)\,\mathrm{Log}\,z$ seul pour calculer $\int R\ln x$, les termes en $\ln x$ **se compensent** : on obtient $\int R$, pas $\int R\ln x$ ; il faut $(\mathrm{Log}\,z)^2$. Les petits et grands cercles : $\eps^{\alpha}\to0$ exige $\alpha>0$, $R^{\alpha-1}\cdot R\cdot R^{-(\deg Q-\deg P)}\to0$ exige $\alpha<\deg Q-\deg P$ ; $\eps\ln\eps\to0$ et $\frac{\ln R}{R}\to0$ pour le logarithme.

### [x] Secteur angulaire — [[ch02-formule-residus-pratique]]
**Quand.** L'intégrande est invariant par une rotation $z\mapsto\omega z$ : $R(x)$ fonction de $x^n$ (typiquement $\frac{1}{1+x^n}$, $\frac{x^m}{1+x^n}$), ou intégrales de type Fresnel ($e^{-x^2}$, secteur d'angle $\pi/4$). Contour : $[0,R]$, arc $\{Re^{i\theta},\,0\le\theta\le2\pi/n\}$, rayon de retour $\{te^{2i\pi/n}\}$ parcouru de $R$ à $0$.
**Justification.** Sur le rayon de retour, $z^n=t^n$, donc l'intégrale vaut $-e^{2i\pi/n}J$ (pour $\frac1{1+x^n}$) : on obtient $(1-e^{2i\pi/n})J=2i\pi\Res_{e^{i\pi/n}}(f)$, **un seul** pôle étant dans le secteur. Le secteur est un ouvert dont le bord est un lacet simple : forme pratique (II.6.1).
**Pièges.** Le signe du rayon de retour ; choisir l'angle pour qu'aucun pôle ne soit **sur** le rayon ; majorer l'arc par longueur × sup ($\frac{2\pi R}{n}\cdot\frac{1}{R^n-1}\to0$).

### [x] Choisir et nommer une détermination du logarithme — [[ch02-logarithme-existence]]
**Quand.** Dès que $x^\alpha$, $\sqrt x$ ou $\ln x$ apparaissent : il faut un logarithme holomorphe de $z$ sur un ouvert simplement connexe contenant le contour privé de la coupure : $\C\setminus\R_+$ (trou de serrure), $\C\setminus i\R_-$ (demi-disque indenté en $0$).
**Justification.** $z\mapsto z$ ne s'annule pas sur ces ouverts simplement connexes, donc admet un logarithme (poly, Proposition II.9.3, p. 56), unique une fois fixée sa valeur en un point ; on pose ensuite $z^{\alpha}:=e^{\alpha\,\mathrm{Log}\,z}$ ([[ch02-puissance-complexe-def]]).
**Pièges.** Écrire explicitement la détermination (« argument dans $]0,2\pi[$ ») et **calculer les résidus avec elle** : $\mathrm{Log}(-1)=i\pi$, $\mathrm{Log}(i)=i\pi/2$, mais $\mathrm{Log}(-i)=3i\pi/2$ et non $-i\pi/2$.

### [ ] Détermination principale du logarithme — [[ch02-logarithme-determination-principale-def]]
**Pourquoi ce n'est pas l'outil ici.** Sa coupure est $\R_-$, qui est **à l'intérieur** du trou de serrure autour de $\R_+$ : la fonction n'est pas holomorphe sur un ouvert contenant le contour et son intérieur, la formule des résidus ne s'applique pas. De plus elle est continue à travers $\R_+$ : les deux bords donneraient les mêmes valeurs et l'intégrale cherchée disparaîtrait. Il faut une coupure **portée par** la demi-droite d'intégration (argument dans $]0,2\pi[$).
**Quand il le serait.** Pour définir $\mathrm{Log}(h(z))$ quand $h$ prend ses valeurs dans $\C\setminus\R_-$ (par exemple $\Re h>0$), ou pour un trou de serrure autour de $\R_-$ (après le changement de variable $x\mapsto-x$).

### [ ] Demi-disque supérieur — [[ch02-exemple-integrale-fourier]]
**Pourquoi ce n'est pas l'outil ici.** Pour une $R$ non paire, le demi-disque donne $\int_{\R}R$, pas $\int_0^{+\infty}R$ ; avec $x^{\alpha}$, l'intégrande n'est même pas méromorphe au voisinage de $0$ (point de branchement) : il faut de toute façon une détermination du logarithme et un contour qui évite $0$.
**Quand il le serait.** Si l'intégrande est **pair** : $\int_0^{+\infty}=\frac12\int_{\R}$ (voir [[rfx-res-integrale-reelle-demi-cercle]]). Et pour $\int_0^{+\infty}R(x)\ln x\,dx$ ou $\int_0^{+\infty}x^{\alpha-1}R(x)\,dx$ avec $R$ paire : demi-disque indenté en $0$ et détermination d'argument dans $]-\pi/2,3\pi/2[$, car sur $\R_-$ on a $\mathrm{Log}\,z=\ln|x|+i\pi$.

## Démarche

1. **Intervalle $[0,2\pi]$** (ou une période) et intégrande rationnel en $\cos,\sin$ → $z=e^{i\theta}$, pôles dans $D(0,1)$.
2. **Intervalle $]0,+\infty[$.**
   * Si l'intégrande se prolonge en une fonction **paire** sur $\R$, méromorphe sur $\C$ → $\frac12\int_{\R}$ et demi-disque.
   * Sinon, si $R(x)$ ne dépend que de $x^n$ → secteur d'angle $2\pi/n$.
   * Sinon, si $x^{\alpha}$ avec $\alpha\notin\Z$ → trou de serrure avec $z^{\alpha-1}$, argument dans $]0,2\pi[$, facteur $(1-e^{2i\pi\alpha})$.
   * Sinon, si $R$ non paire sans puissance → trou de serrure avec $R(z)\,\mathrm{Log}\,z$ : $J=-\sum_s\Res_s\big(R(z)\,\mathrm{Log}\,z\big)$.
   * Si $R(x)\ln x$ → trou de serrure avec $R(z)(\mathrm{Log}\,z)^2$, ou dériver en $\alpha$ la formule en $x^{\alpha-1}$ (dérivation sous le signe intégrale, domination à justifier), ou demi-disque indenté si $R$ est paire.
3. **Estimations** sur le petit cercle ($\eps^{\alpha}$, $\eps\ln\eps$, $\eps(\ln\eps)^2\to0$) et sur le grand ($R\cdot\sup|f|\to0$), chacune écrite avec une majoration explicite.
4. **Résidus** calculés avec la détermination choisie.
5. **Résoudre** l'équation linéaire en $J$ ; vérifier que le résultat est réel, et positif si l'intégrande l'est.

## Pièges

* Oublier le facteur $\frac1{iz}$ dans la substitution $z=e^{i\theta}$, ou compter les pôles hors du disque unité.
* Utiliser la détermination principale du logarithme pour un trou de serrure autour de $\R_+$.
* Calculer un résidu avec $\mathrm{Log}(-i)=-i\pi/2$ alors que la détermination choisie a ses arguments dans $]0,2\pi[$.
* Oublier que le segment « du dessous » est parcouru de $R$ à $\eps$ (signe moins).
* Vouloir $\int_0^{+\infty}R\ln x$ avec $R\,\mathrm{Log}$ : les logarithmes se compensent ; il faut le carré.
* Ne pas vérifier que la condition $0<\alpha<\deg Q-\deg P$ garantit à la fois la convergence et la nullité des deux cercles.

## Mini-exemple

*(a)* $I=\displaystyle\int_0^{2\pi}\frac{d\theta}{5+3\cos\theta}$. Avec $z=e^{i\theta}$ : $5+3\cos\theta=\frac{3z^2+10z+3}{2z}$, donc $I=\int_{C(0,1)}\frac{2z}{3z^2+10z+3}\cdot\frac{dz}{iz}=\int_{C(0,1)}\frac{2\,dz}{3i(z+3)(z+\frac13)}$. Seul $-\frac13$ est dans $D(0,1)$, de résidu $\frac{2}{3i(3-\frac13)}=\frac1{4i}$. Donc $I=2i\pi\cdot\frac1{4i}=\frac\pi2$.

*(b)* $J=\displaystyle\int_0^{+\infty}\frac{dx}{(x+1)(x+2)}$ ($R$ non paire). Soit $f(z)=\frac{\mathrm{Log}\,z}{(z+1)(z+2)}$, argument dans $]0,2\pi[$. Bord supérieur : $\int_\eps^R\frac{\ln x}{(x+1)(x+2)}dx$ ; bord inférieur : $-\int_\eps^R\frac{\ln x+2i\pi}{(x+1)(x+2)}dx$ ; leur somme tend vers $-2i\pi J$. Les cercles sont majorés par $2\pi R\frac{\ln R+2\pi}{(R-1)(R-2)}\to0$ et $2\pi\eps\frac{|\ln\eps|+2\pi}{(1-\eps)(2-\eps)}\to0$. Résidus : $\Res_{-1}f=\frac{\mathrm{Log}(-1)}{1}=i\pi$, $\Res_{-2}f=\frac{\mathrm{Log}(-2)}{-1}=-\ln2-i\pi$. Donc $-2i\pi J=2i\pi(-\ln2)$, soit $J=\ln2$ — ce que confirme le calcul direct $\big[\ln\frac{x+1}{x+2}\big]_0^{+\infty}=\ln2$.
