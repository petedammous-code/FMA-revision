---
id: rfx-edo-unicite-identifier
type: reflexe
situation: Établir une propriété d'une solution (parité, symétrie, périodicité, signe, valeurs dans un intervalle, formule) en construisant une autre solution de même condition initiale et en invoquant l'unicité
chapters: [7, 9]
---
## Situation

On a une EDO à laquelle Cauchy–Lipschitz s'applique et une solution $\alpha$ qu'on ne sait pas calculer. L'énoncé demande : « montrer que $\alpha$ est impaire », « que $\alpha(t+T)=\alpha(t)$ », « que si $\alpha$ s'annule elle est identiquement nulle », « que $\alpha(t)\in\,]0,1[$ pour tout $t$ », « que la trajectoire est symétrique par rapport à l'axe », « que $\beta=R\circ\alpha$ est encore une solution », « en déduire que $\alpha=\dots$ », « que deux trajectoires distinctes ne se coupent pas ». C'est l'argument le plus fréquent des corrigés d'EDO : on **fabrique un candidat** et on dit « par unicité ».

## Options

### [x] Unicité globale (même condition initiale, même solution) — [[ch07-unicite-globale]]
**Quand.** On sait construire à partir de $\alpha$ une autre courbe $\beta$ qui vérifie **la même équation** et **la même condition initiale** : $\beta(t)=-\alpha(-t)$ (solution dès que $X(-t,-x)=X(t,x)$ ; pour $x''=f(x)$, dès que $f$ est impaire), $\beta(t)=R\alpha(t)$ ($R$ isométrie commutant avec le champ), $\beta(t)=\alpha(t+T)$, $\beta$ constante (équilibre). Alors $\beta=\alpha$ sur l'intersection des domaines (poly, Proposition VII.3.1, p. 134), et, par maximalité, les domaines eux-mêmes se correspondent.
**Justification.** Deux courbes intégrales de même condition initiale coïncident sur l'intersection de leurs intervalles.
**Pièges.** **Vérifier** que $\beta$ est solution par un calcul explicite (dérivée de $t\mapsto\alpha(-t)$ : signe $-$). Pour les domaines : si $\alpha$ est maximale sur $J$ et $\beta$ est solution sur $-J$, alors $-J\subset J$ ; en échangeant les rôles, $J=-J$.

### [x] Translation en temps pour un champ autonome — [[ch07-translation-temps-autonome]]
**Quand.** Champ **autonome**. Si $\alpha(t_1)=\alpha(t_2)$ avec $t_1\ne t_2$, alors $\alpha$ est périodique de période $t_2-t_1$ et définie sur $\R$ ; si deux trajectoires ont un point commun, elles sont égales à translation du temps près (poly, Théorème VII.3.5, p. 135). Pour un équilibre $x^*$ : aucune solution non constante n'atteint $x^*$.
**Justification.** $t\mapsto\alpha(t+t_1)$ est la courbe intégrale maximale de condition initiale $\alpha(t_1)$, avec $J(\alpha(t_1))=J(x_0)-t_1$.
**Pièges.** Faux pour un champ **dépendant du temps** : $x'=t$ a la solution $t^2/2$, qui prend la même valeur en $-1$ et en $1$ sans être périodique. Pour un champ $T$-périodique en $t$ ($X(t+T,x)=X(t,x)$), le critère correct est $\alpha(t_0+T)=\alpha(t_0)$ avec **cette** période $T$ : alors $t\mapsto\alpha(t+T)$ est solution de même condition initiale en $t_0$.

### [x] Solutions particulières qui servent de barrières (dimension 1) — [[ch07-courbe-integrale-maximale-def]]
**Quand.** EDO **scalaire** $x'=f(t,x)$ avec des solutions évidentes $x\equiv c$ ($f(t,c)=0$ pour tout $t$) ou explicites $x=\varphi(t)$. Par unicité, une solution qui démarre entre deux barrières ne peut pas les toucher ; par le théorème des valeurs intermédiaires, elle reste **entre** elles. En particulier : si $f(t,0)=0$, une solution nulle en un point est identiquement nulle, et une solution non nulle garde un **signe constant**. Le confinement obtenu sert ensuite au lemme des bouts ([[rfx-edo-globale-explosion]]).
**Justification.** Si $\alpha(t_1)=c$, $\alpha$ et la constante $c$ ont la même condition initiale $(t_1,c)$.
**Pièges.** En dimension $\ge2$, deux trajectoires peuvent « se contourner » : l'argument de barrière ne marche que si la barrière **sépare** l'espace (droite dans le plan formée de trajectoires, hypersurface invariante).

### [x] Propriété de groupe du flot — [[ch07-groupe-un-parametre]]
**Quand.** On veut une identité fonctionnelle sur le flot : $F_s\circ F_t=F_{s+t}$, $e^{(s+t)A}=e^{sA}e^{tA}$, un « morphisme de groupes $\R\to$ bijections de $U$ », ou relier deux flots conjugués ($\Phi\circ F_t\circ\Phi^{-1}$ est le flot du champ transporté). Tout se démontre en remarquant que les deux membres, comme fonctions de $s$, sont solutions de la même EDO avec la même valeur en $s=0$ (poly, Remarque VII.3.6, p. 135).
**Justification.** Unicité appliquée à $s\mapsto F_{s+t}(x)$ et $s\mapsto F_s(F_t(x))$.
**Pièges.** Vérifier que les points sont dans le domaine $D_0$ du flot avant d'écrire la formule.

### [ ] Résolution explicite systématique — [[ch07-peano-non-unicite]]
**Pourquoi ce n'est pas l'outil ici.** Chercher une formule fermée est souvent impossible (énoncés construits pour ne pas l'avoir), et une formule « trouvée » n'identifie **la** solution que grâce à l'unicité ; sans condition de Lipschitz, ce raisonnement est même faux : pour $\alpha'=2\abs{\alpha}^{1/2}$, $\alpha(0)=0$, la formule $\mathrm{signe}(t)t^2$ n'est pas la seule solution (poly, Remarque VII.2.5, p. 129).
**Quand il le serait.** Équations scalaires séparables ou linéaires, systèmes linéaires à coefficients constants : on calcule, puis on conclut par unicité que c'est **la** solution.

## Démarche

1. **Vérifier Cauchy–Lipschitz** (champ $C^1$) : sans unicité, rien de ce qui suit ne vaut ([[rfx-edo-existence-unicite]]).
2. **Repérer la symétrie** de l'équation : changement $t\to-t$, $x\to-x$, rotation, translation en temps, périodicité du champ en $t$, invariance par un groupe.
3. **Construire le candidat** $\beta$ à partir de $\alpha$ et vérifier par calcul : (i) $\beta$ est solution sur un intervalle ouvert ; (ii) $\beta(t_0)=\alpha(t_0)$ (et $\beta'(t_0)=\alpha'(t_0)$ pour l'ordre $2$).
4. **Conclure** $\beta=\alpha$ sur l'intersection des domaines ; si la question porte sur l'intervalle maximal, comparer les domaines par maximalité.
5. Si l'on veut un signe ou un encadrement en dimension $1$, alors utiliser les solutions constantes comme barrières et les valeurs intermédiaires.
6. Si l'on veut une périodicité, alors montrer un **retour** $\alpha(t_0+T)=\alpha(t_0)$ pour un $T>0$ quelconque (champ autonome), ou pour $T$ égal à une période du champ en $t$ (champ périodique en $t$).

## Pièges

* Oublier la condition sur la dérivée pour une équation d'ordre $2$.
* Mal dériver $\alpha(-t)$ (signe), ou $R\alpha$ quand $R$ ne commute pas avec le champ.
* Conclure sur tout $\R$ alors qu'on n'a l'égalité que sur l'intersection des domaines.
* Utiliser la translation en temps pour un champ non autonome.
* Invoquer l'unicité pour un champ non lipschitzien.

## Mini-exemple

*Énoncé.* (a) Soit $x$ la solution maximale de $x''=-x^3$, $x(0)=0$, $x'(0)=1$. Montrer que $x$ est impaire. (b) Soit $x$ la solution maximale de $x'=e^tx(1-x)$, $x(0)=x_0\in\,]0,1[$. Montrer que $x(t)\in\,]0,1[$ pour tout $t$ et que $x$ est définie sur $\R$.

*Solution.* (a) Le champ $(u,v)\mapsto(v,-u^3)$ est $C^\infty$ : unicité. Soit $J$ l'intervalle de $x$ et $\beta(t)=-x(-t)$ sur $-J$ : $\beta'(t)=x'(-t)$, $\beta''(t)=-x''(-t)=x(-t)^3=-\beta(t)^3$, $\beta(0)=0$, $\beta'(0)=1$. Donc $\beta$ est solution de même condition initiale : $-J\subset J$, puis $J=-J$ par symétrie, et $\beta=x$, c'est-à-dire $x(-t)=-x(t)$.
(b) $f(t,x)=e^tx(1-x)$ est $C^\infty$ et les constantes $0$ et $1$ sont solutions. Si $x(t_1)\in\{0,1\}$, $x$ coïnciderait avec une constante (même condition initiale $(t_1,x(t_1))$), contredisant $x(0)=x_0$. Par les valeurs intermédiaires, $x(t)\in\,]0,1[$ sur $J$. La solution reste dans le compact $[0,1]$ : par le lemme des bouts (version non autonome), $J=\R$. De plus $x'>0$ : $x$ est croissante.
