---
id: rfx-diff-extremum-hessienne
type: reflexe
situation: Calculer une différentielle seconde (hessienne) et déterminer la nature d'un point critique (extremum local libre)
chapters: [5, 6, 9]
---
## Situation

On a $f:U\to\R$ de classe $C^2$ sur un **ouvert** $U$ d'un espace vectoriel normé $E$ (souvent $\R^n$, parfois $\mathrm M_n(\R)$ ou un espace de Hilbert). L'énoncé demande : « déterminer les extrema locaux de $f$ », « montrer que $a$ est un minimum local strict », « $a$ est-il un extremum ? », « calculer $d^2f_a$ », « déterminer la signature de la hessienne ». On veut : trouver les points critiques, calculer $d^2f_a$, conclure sur la nature du point (min, max, col, cas douteux).

## Options

### [x] Condition d'ordre 1 : $df_a=0$ — [[ch09-extremum-local-differentielle-nulle]]
**Quand.** $a$ est un extremum local et $a$ est **intérieur** au domaine (ouvert $U$). Un ouvert est une sous-variété de dimension $N$ dont l'espace tangent est $\R^N$ ([[ch09-ex-ouvert-sous-variete]]), d'où $df_a=0$ (poly, Théorème IX.7.31, p. 168).
**Justification.** En dimension quelconque : pour tout $h$, $\varphi(t)=f(a+th)$ est définie près de $0$ (car $U$ est ouvert) et a un extremum en $t=0$, donc $\varphi'(0)=df_a(h)=0$.
**Pièges.** Condition **nécessaire** seulement ($x\mapsto x^3$). Si le domaine est fermé (boule fermée, $\{x\ge0\}$) un extremum au **bord** n'annule pas $df_a$ : traiter le bord à part (multiplicateurs de Lagrange [[ch09-multiplicateurs-lagrange]] si le bord est une sous-variété).

### [x] Calcul de $d^2f_a$ par $t\mapsto f(a+th)$ — [[ch05-formule-pratique-dpf]]
**Quand.** Toujours, et surtout sur des matrices ou en dimension infinie où l'on ne veut pas écrire de matrice hessienne : développer $f(a+th)$ en $t$ jusqu'à l'ordre $2$ ; le coefficient de $t^2$ vaut $\frac12d^2f_a(h,h)$.
**Justification.** $d^2f_a(h,h)=\frac{d^2}{dt^2}f(a+th)\big|_{t=0}$ (poly, Remarque V.5.6, p. 109) ; $d^2f_a$ est symétrique par le lemme de Schwarz [[ch05-lemme-schwarz]], donc déterminée par la forme quadratique $h\mapsto d^2f_a(h,h)$ (polarisation). En dimension finie, $d^2f_a(h,k)={}^th\,\mathrm{Hess}_af\,k$ avec $\mathrm{Hess}_af=\big(\frac{\partial^2f}{\partial x_i\partial x_j}(a)\big)$.
**Pièges.** Ne pas confondre $d^2f_a(h,h)$ et $\frac12d^2f_a(h,h)$ (le $\frac12$ de Taylor). Exemple : $f(A)=\mathrm{tr}(A^3)$ ; $f(A+tH)=\mathrm{tr}A^3+3t\,\mathrm{tr}(A^2H)+3t^2\mathrm{tr}(AH^2)+t^3\mathrm{tr}H^3$, donc $d^2f_A(H,H)=6\,\mathrm{tr}(AH^2)$.

### [x] Conditions d'ordre 2 (signe de la hessienne) — [[ch09-hessienne-extrema-ordre-deux]]
**Quand.** $df_a=0$ et $d^2f_a$ calculée. Si $f$ a un minimum (resp. maximum) local en $a$ alors $d^2f_a$ est **positive** (resp. négative) ; réciproquement, si $d^2f_a$ est **définie positive** (resp. négative) en dimension finie, $a$ est un minimum (resp. maximum) local **strict**. Si $d^2f_a$ prend les deux signes, $a$ est un **col** (ni min ni max).
**Justification.** Taylor–Young à l'ordre $2$ [[ch05-taylor-young]] : $f(a+h)-f(a)=\frac12d^2f_a(h,h)+o(\|h\|^2)$. En dimension finie, la sphère unité est compacte donc $d^2f_a(h,h)\ge\alpha\|h\|^2$ avec $\alpha>0$, et $f(a+h)-f(a)\ge(\frac\alpha2-\eps)\|h\|^2>0$ pour $0<\|h\|$ petit.
**Pièges.** En **dimension infinie**, « définie positive » ($d^2f_a(h,h)>0$ pour $h\ne0$) ne suffit pas : il faut la **coercivité** $d^2f_a(h,h)\ge\alpha\|h\|^2$. Contre-exemple sur $\ell^2$ : $f(x)=\sum_n\big(\frac{x_n^2}n-x_n^4\big)$ (polynomiale continue, donc $C^\infty$), $d^2f_0(h,h)=2\sum h_n^2/n>0$, mais $f(te_n)=\frac{t^2}n-t^4<0$ dès que $t>1/\sqrt n$, et $te_n\to0$ quand $n\to\infty$ à $t=2/\sqrt n$.

### [x] Réduire la forme quadratique (Gauss, Sylvester, critère en dimension 2) — [[ch06-point-critique-non-degenere-def]]
**Quand.** Il faut décider le signe de $d^2f_a$ : signature $(r,s)$ par réduction de Gauss ou valeurs propres de la hessienne (symétrique réelle). En dimension $2$, avec $\mathrm{Hess}_af=\begin{pmatrix}r&s\\s&t\end{pmatrix}$ : $rt-s^2>0$ et $r>0$ ⇒ min local strict ; $rt-s^2>0$ et $r<0$ ⇒ max local strict ; $rt-s^2<0$ ⇒ col ; $rt-s^2=0$ ⇒ on ne peut pas conclure à l'ordre $2$.
**Justification.** Signature = nombre de carrés positifs/négatifs ; non dégénéré ⇔ hessienne inversible ; définie positive ⇔ signature $(n,0)$.
**Pièges.** **Cas dégénéré** ($\det\mathrm{Hess}=0$) : l'ordre $2$ ne décide pas. $x^2+y^4$ (min), $x^2-y^4$ (col), $x^2+y^3$ (col) ont la même hessienne en $0$. Il faut alors étudier $f$ le long de courbes bien choisies, ou minorer/majorer à la main.

### [ ] Multiplicateurs de Lagrange — [[ch09-multiplicateurs-lagrange]]
**Pourquoi ce n'est pas l'outil ici.** Pour un extremum **libre** sur un ouvert, il n'y a pas de contrainte : la condition est $df_a=0$, sans multiplicateur.
**Quand il le serait.** Extremum **lié** : $f$ restreinte à $S=\{F=0\}$ avec $0$ valeur régulière de $F$ (sphère, bord d'un domaine fermé). On écrit $df_p=\sum_iw_i\,d(F_i)_p$ avec $f$ définie sur un ouvert contenant $S$ (notée $g$ dans la Proposition IX.7.35).

### [ ] Lemme de Morse — [[ch06-lemme-de-morse]]
**Pourquoi ce n'est pas l'outil ici.** La nature d'un point critique **non dégénéré** se lit déjà sur la signature via Taylor–Young ; Morse (un changement de variables $C^\infty$ qui met $f$ sous forme $\sum_{i\le r}h_i^2-\sum_{i>r}h_i^2$) est bien plus fort que nécessaire et ne dit **rien** dans le cas dégénéré.
**Quand il le serait.** Pour décrire la **géométrie** près du point critique : forme des lignes de niveau, $f^{-1}(f(a))$ localement réunion de deux courbes transverses en un col de $\R^2$ (voir [[rfx-diff-taylor-ordre-deux]]).

## Démarche

1. **Domaine** : est-il ouvert ? Si non, séparer intérieur (extremum libre) et bord (extremum lié ou paramétrage du bord).
2. **Points critiques** : résoudre $df_a=0$ (système des dérivées partielles, ou $df_a(h)=0$ pour tout $h$ en dimension infinie, ce qui donne souvent une équation : $\nabla f(a)=0$ dans un Hilbert, [[ch05-gradient-hilbert]]).
3. **Hessienne** en chaque point critique : matrice des $\partial^2f/\partial x_i\partial x_j$, ou développement de $f(a+th)$ à l'ordre $2$.
4. **Signe** : si définie positive/négative (et coercive en dimension infinie) alors extremum local strict ; si elle prend les deux signes alors col (exhiber $h_+$ et $h_-$ avec $d^2f_a(h_\pm,h_\pm)\gtrless0$ et regarder $f(a+th_\pm)$) ; si seulement semi-définie (dégénérée) alors étude à la main.
5. **Global ?** Un extremum local n'est pas global : pour un extremum global, utiliser la compacité (fonction continue sur un compact, ou $f\to+\infty$ à l'infini) ou la **convexité** ($f$ convexe et $df_a=0$ ⇒ minimum global).

## Pièges

* Conclure « minimum » à partir de $df_a=0$ seul.
* Oublier qu'un col se prouve en exhibant **deux directions** de signes opposés.
* Hessienne semi-définie ⇒ « min local » : faux en général ($x^2+y^3$).
* En dimension infinie, « définie positive » ≠ « coercive » : contre-exemple $\ell^2$ ci-dessus.
* Oublier les points du bord quand le domaine n'est pas ouvert.
* Facteur $\frac12$ : $f(a+h)=f(a)+\frac12d^2f_a(h,h)+o(\|h\|^2)$.

## Mini-exemple

*Énoncé.* Nature des points critiques de $f(x,y)=x^3+y^3-3xy$ sur $\R^2$.

*Solution.* $\partial_xf=3x^2-3y$, $\partial_yf=3y^2-3x$ ; $df=0$ ⇔ $y=x^2$ et $x=y^2$ ⇔ $x^4=x$, d'où $(0,0)$ et $(1,1)$. $\mathrm{Hess}f=\begin{pmatrix}6x&-3\\-3&6y\end{pmatrix}$. En $(0,0)$ : $rt-s^2=-9<0$, **col** (en effet $f(t,t)=2t^3-3t^2<0$ et $f(t,-t)=3t^2>0$ pour $t$ petit non nul). En $(1,1)$ : $rt-s^2=36-9=27>0$ et $r=6>0$, **minimum local strict**, $f(1,1)=-1$. Il n'est pas global : $f(x,0)=x^3\to-\infty$ quand $x\to-\infty$.
