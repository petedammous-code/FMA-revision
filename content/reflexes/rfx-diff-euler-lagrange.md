---
id: rfx-diff-euler-lagrange
type: reflexe
situation: Écrire une condition nécessaire pour qu'une courbe extrémalise une fonctionnelle intégrale, et trouver des quantités conservées (Euler–Lagrange, énergie, Noether)
chapters: [8, 5, 7]
---
## Situation

On a une fonctionnelle $J(\gamma)=\hat L(\gamma)=\int_0^1L(t,\gamma(t),\gamma'(t))\,dt$ définie sur des courbes $\gamma\in E=C^1([0,1];V)$ ($V=\R^n$), en général à **extrémités fixées** $\gamma(0)=a$, $\gamma(1)=b$ (espace affine $E_{a,b}$, de direction $E_{0,0}$). Exemples : longueur, énergie $\int\frac12|\gamma'|^2-U(\gamma)$, temps de parcours, aire d'une surface de révolution. L'énoncé : « montrer que si $\gamma$ minimise $J$ alors $\gamma$ vérifie une équation différentielle », « déterminer les courbes critiques », « montrer que telle quantité est constante le long des solutions », « montrer que le minimum est atteint en $\gamma_0$ ».

## Options

### [x] Différentielle de $\hat L$ et condition de point critique — [[ch08-lhat-c1-differentielle]]
**Quand.** $L$ est $C^1$ ; on calcule, pour $h\in E$,
$$d\hat L_\gamma(h)=\int_0^1\Big(\Big\langle\frac{\partial L}{\partial q},h\Big\rangle+\Big\langle\frac{\partial L}{\partial v},h'\Big\rangle\Big)dt,$$
les dérivées partielles étant évaluées en $(t,\gamma(t),\gamma'(t))$ (poly, Question 2, p. 143). Si $\gamma$ minimise $\hat L$ sur $E_{a,b}$, alors pour tout $h\in E_{0,0}$ la fonction $s\mapsto\hat L(\gamma+sh)$ a un minimum en $s=0$ (car $\gamma+sh\in E_{a,b}$), donc $d\hat L_\gamma(h)=0$.
**Justification.** $\hat L$ est $C^1$ sur $E$ (continuité uniforme des partielles de $L$ sur un compact), et la condition d'ordre 1 sur l'espace affine $E_{a,b}$.
**Pièges.** Les directions admissibles $h$ **s'annulent aux extrémités** fixées. Si une extrémité est **libre** (par exemple $\gamma(1)$ quelconque), on obtient en plus la condition au bord naturelle $\frac{\partial L}{\partial v}(1,\gamma(1),\gamma'(1))=0$.

### [x] Lemme de du Bois-Reymond ⇒ équation d'Euler–Lagrange — [[ch08-euler-lagrange]]
**Quand.** On a $\int_0^1\langle A,h\rangle+\langle B,h'\rangle=0$ pour tout $h\in E_{0,0}$, avec $A=\frac{\partial L}{\partial q}(t,\gamma,\gamma')$ et $B=\frac{\partial L}{\partial v}(t,\gamma,\gamma')$ continues : alors $B$ est $C^1$ et $B'=A$ ([[ch08-du-bois-reymond-derivee]]), c'est-à-dire
$$\frac{d}{dt}\frac{\partial L}{\partial v}(t,\gamma,\gamma')=\frac{\partial L}{\partial q}(t,\gamma,\gamma')\qquad\text{(E.L)}$$
(poly, Question 5, p. 144).
**Justification.** Poser $\mathcal A(t)=\int_0^tA$, intégrer par parties $\int\langle A,h\rangle=-\int\langle\mathcal A,h'\rangle$, puis appliquer du Bois-Reymond [[ch08-du-bois-reymond]] à $B-\mathcal A$ : constante.
**Pièges.** L'**intégration par parties directe** sur $\int\langle B,h'\rangle$ suppose $B$ dérivable, donc $\gamma\in C^2$ : c'est précisément ce que du Bois-Reymond évite. E.L est une condition **nécessaire** seulement.

### [x] Conservation de l'énergie (Lagrangien autonome) — [[ch08-energie-conservee]]
**Quand.** $L$ ne dépend pas de $t$ et $\gamma$ est une solution $C^2$ de E.L : alors $H=\frac{\partial L}{\partial v}(\gamma,\gamma')\cdot\gamma'-L(\gamma,\gamma')$ est constante (poly, Question 6, p. 144). Permet de **réduire l'ordre** : on passe d'une équation d'ordre $2$ à une équation d'ordre $1$.
**Justification.** Dériver $H$ et utiliser E.L : $H'=\big(\frac{d}{dt}\partial_vL-\partial_qL\big)\cdot\gamma'=0$.
**Pièges.** Ne s'applique pas si $L$ dépend explicitement de $t$. Pour $L=\frac12|v|^2-U(q)$, on trouve $H=\frac12|\gamma'|^2+U(\gamma)$ (énergie mécanique) et E.L est l'équation de Newton $\gamma''=-\nabla U(\gamma)$ ([[ch08-equation-newton]]).

### [x] Théorème de Noether (symétrie ⇒ quantité conservée) — [[ch08-noether]]
**Quand.** $L$ est **invariant** par un groupe à un paramètre de difféomorphismes $(F_s)$, flot d'un champ $X$ : $L(u,F_s(q),d(F_s)_q(v))=L(u,q,v)$. Alors $Q(t)=\frac{\partial L}{\partial v}(t,\gamma,\gamma')\cdot X(\gamma(t))$ est constante le long de toute solution de E.L (poly, p. 145). Translations $q\mapsto q+se$ ($X=e$) : si $L$ ne dépend pas de $q$ dans la direction $e$, l'**impulsion** $\partial_vL\cdot e$ est conservée ; rotations : le **moment cinétique** ([[ch08-moment-cinetique]]).
**Justification.** Forme infinitésimale de l'invariance ([[ch08-invariance-infinitesimale]]) $\partial_qL\cdot X+\partial_vL\cdot dX_q(v)=0$, puis $Q'=\frac{d}{dt}(\partial_vL)\cdot X+\partial_vL\cdot dX_\gamma(\gamma')=\partial_qL\cdot X+\partial_vL\cdot dX_\gamma(\gamma')=0$.
**Pièges.** Vérifier l'invariance **pour tout $s$** (ou la forme infinitésimale) ; ne pas oublier le terme $dX_q(v)$ pour une symétrie non translationnelle.

### [ ] Multiplicateurs de Lagrange — [[ch09-multiplicateurs-lagrange]]
**Pourquoi ce n'est pas l'outil ici.** Les contraintes $\gamma(0)=a$, $\gamma(1)=b$ définissent un **espace affine** : on dérive dans les directions $h\in E_{0,0}$, sans multiplicateur. Et la Proposition IX.7.35 est énoncée en dimension finie.
**Quand il le serait.** Extremum sous une contrainte **intégrale** ($\int_0^1G(\gamma,\gamma')=c$, problème isopérimétrique) : on cherche alors les points critiques de $L-\mu G$, mais l'argument en dimension infinie doit être justifié (hors poly).

### [ ] Conditions d'ordre 2 (hessienne) — [[ch09-hessienne-extrema-ordre-deux]]
**Pourquoi ce n'est pas l'outil ici.** La question porte sur une condition **nécessaire** (ordre 1) ; et en dimension infinie, une hessienne « positive » ne suffit pas à conclure (il faut de la coercivité).
**Quand il le serait.** Pour montrer qu'une solution de E.L est **effectivement** un minimum, il vaut mieux utiliser la **convexité** : si $(q,v)\mapsto L(t,q,v)$ est convexe, $\hat L$ est convexe et $\hat L(\gamma+h)-\hat L(\gamma)\ge d\hat L_\gamma(h)=0$ ; ou calculer directement $\hat L(\gamma+h)-\hat L(\gamma)$.

## Démarche

1. **Identifier** $L(t,q,v)$ (remplacer $\gamma$ par $q$ et $\gamma'$ par $v$), l'espace $E_{a,b}$ et les directions admissibles $E_{0,0}$ (ou les conditions au bord libres).
2. **Calculer** $d\hat L_\gamma(h)$ ; si $\gamma$ est un extremum alors $d\hat L_\gamma(h)=0$ pour tout $h$ admissible.
3. **Conclure** par du Bois-Reymond : E.L $\frac{d}{dt}\partial_vL=\partial_qL$ (+ conditions naturelles aux extrémités libres).
4. **Résoudre** E.L : si $L$ est autonome alors utiliser l'énergie $H$ ; si $L$ ne dépend pas d'une coordonnée (ou a une symétrie) alors Noether ; puis imposer les conditions au bord.
5. **Minimalité** (si demandée) : convexité de $L$ en $(q,v)$, ou calcul direct de $\hat L(\gamma+h)-\hat L(\gamma)$.
6. **Existence/unicité** de solutions de E.L à conditions **initiales** données : Lagrangien régulier ($\partial^2_vL$ non dégénérée) puis Cauchy–Lipschitz ([[ch08-existence-unicite-locale]]).

## Pièges

* Prendre des variations $h$ qui ne s'annulent pas aux extrémités fixées.
* Intégrer par parties en supposant $\gamma\in C^2$ sans le justifier.
* Confondre « $\gamma$ vérifie E.L » et « $\gamma$ est un minimum » (E.L est seulement nécessaire).
* Signe de $H$ : $H=\partial_vL\cdot\gamma'-L$, et non $L-\partial_vL\cdot\gamma'$ (constante dans les deux cas, mais l'interprétation « énergie » change).
* Oublier qu'un Lagrangien dépendant de $t$ ne conserve pas l'énergie.

## Mini-exemple

*Énoncé.* Minimiser $J(\gamma)=\int_0^1\big(\gamma'(t)^2+\gamma(t)^2\big)dt$ sur $E_{0,1}=\{\gamma\in C^1([0,1];\R),\ \gamma(0)=0,\ \gamma(1)=1\}$.

*Solution.* $L(q,v)=v^2+q^2$, $\partial_qL=2q$, $\partial_vL=2v$. E.L : $(2\gamma')'=2\gamma$, soit $\gamma''=\gamma$, donc $\gamma=A\cosh t+B\sinh t$ ; $\gamma(0)=0$ et $\gamma(1)=1$ donnent $\gamma_0(t)=\frac{\sinh t}{\sinh1}$. Énergie : $H=2\gamma'\cdot\gamma'-L=\gamma'^2-\gamma^2=\frac{\cosh^2t-\sinh^2t}{\sinh^21}=\frac1{\sinh^21}$, bien constante. Minimalité : pour $h\in E_{0,0}$, $J(\gamma_0+h)-J(\gamma_0)=dJ_{\gamma_0}(h)+\int_0^1(h'^2+h^2)=\int_0^1(h'^2+h^2)>0$ si $h\ne0$ : $\gamma_0$ est l'unique minimum, et $J(\gamma_0)=[\gamma_0\gamma_0']_0^1=\coth1$ (intégration par parties avec $\gamma_0''=\gamma_0$).
