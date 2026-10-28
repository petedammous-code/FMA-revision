---
id: ch02-exemple-trou-de-serrure
type: proposition
chapter: 2
title: "Intégrale avec coupure (contour en trou de serrure) : $\int_0^{+\infty}\frac{x^{\alpha-1}}{1+x}dx = \frac{\pi}{\sin(\alpha\pi)}$"
ref: Exemple II.9.7
page: 57
importance: 2
depends: [ch02-formule-residus, ch02-formule-residus-pratique, ch02-logarithme-existence, ch02-residu-pole-simple, ch01-longueur-majoration-integrale, ch02-puissance-complexe-def]
tags: [residus, coupure, trou de serrure, puissance complexe, calcul integrale, determination]
---
## Intuition

> 💡 La fonction $z^{\alpha-1}$ ($0<\alpha<1$) n'est pas univoque : quand on tourne une fois autour de $0$, elle est multipliée par $e^{2i\pi(\alpha-1)}=e^{2i\pi\alpha}\neq1$. On **exploite** ce défaut : on coupe le plan le long de $\R_+$, l'axe même sur lequel on veut intégrer. Le long du bord supérieur de la coupure, $z^{\alpha-1}=x^{\alpha-1}$ ; le long du bord inférieur (après un tour), $z^{\alpha-1}=x^{\alpha-1}e^{2i\pi\alpha}$. Un contour qui longe les deux bords en sens opposés (un « trou de serrure ») donne donc $J-e^{2i\pi\alpha}J$, au lieu de $J-J=0$ ; la formule des résidus fournit la valeur de cette combinaison.

Ingrédients : la **formule des résidus** sous forme pratique, $\int_{\partial U}f=2i\pi\sum_{s\in U}\Res_s(f)$ ([[ch02-formule-residus-pratique]], [[ch02-formule-residus]]) ; un **logarithme** de $z$ sur $\C\setminus\R_+$ ([[ch02-logarithme-existence]]) pour définir $z^{\alpha-1}=e^{(\alpha-1)\mathrm{Log}(z)}$ ([[ch02-puissance-complexe-def]]) ; le résidu en un pôle simple ([[ch02-residu-pole-simple]]) ; la majoration $\abs{\int_\gamma f}\le\sup_\gamma|f|\cdot L(\gamma)$ ([[ch01-longueur-majoration-integrale]]).

## Énoncé

**Proposition (poly, Exemple II.9.7, p. 57).** Pour $0<\alpha<1$,
$$
J=\int_0^{+\infty}\frac{x^{\alpha-1}}{1+x}\,dx=\frac{\pi}{\sin(\alpha\pi)} .
$$
**Méthode du poly.** On pose $f(z)=\dfrac{z^{\alpha-1}}{1+z}$, où $z^{\alpha-1}=e^{(\alpha-1)\mathrm{Log}(z)}$ pour la détermination du logarithme sur $\C\setminus\R_+$ telle que l'argument soit dans $]0,2\pi[$ (donc $\mathrm{Log}(-1)=i\pi$ pour cette détermination ; ce n'est **pas** la détermination principale, dont la coupure est $\R_-$). On intègre $f$ sur le contour en trou de serrure $\Gamma_{\eps,R}$ : segment $\gamma_+$ de $\eps$ à $R$ juste au-dessus de l'axe réel ($z=xe^{i0}$), grand cercle $C_R$ parcouru dans le sens trigonométrique, segment $\gamma_-$ de $R$ à $\eps$ juste en dessous de l'axe réel ($z=xe^{2i\pi}$), petit cercle $C_\eps$ parcouru dans le sens horaire.

## Hypothèses

### H1 — $0<\alpha<1$

**Rôle.** $\alpha>0$ assure l'intégrabilité en $0$ ($x^{\alpha-1}$ intégrable) et $\int_{C_\eps}f\to0$ (majorant $\approx2\pi\eps^{\alpha}$) ; $\alpha<1$ assure l'intégrabilité en $+\infty$ (intégrande $\sim x^{\alpha-2}$) et $\int_{C_R}f\to0$ (majorant $\approx2\pi R^{\alpha-1}$). De plus $\alpha\notin\Z$ garantit $1-e^{2i\pi\alpha}\neq0$, ce qui permet de conclure.

**Si on la retire.** Pour $\alpha\le0$, $\frac{x^{\alpha-1}}{1+x}\ge\frac{x^{\alpha-1}}{2}$ sur $]0,1]$, non intégrable : $J=+\infty$. Pour $\alpha\ge1$, $\frac{x^{\alpha-1}}{1+x}\ge\frac{1}{1+x}$ sur $[1,+\infty[$, non intégrable : $J=+\infty$. (Cohérent avec $\frac{\pi}{\sin(\alpha\pi)}\to+\infty$ quand $\alpha\to0^+$ ou $1^-$.) Pour $\alpha=1$ la méthode s'effondre aussi : $z^{0}=1$ est univoque, il n'y a plus de saut et l'on obtiendrait $J-J$.

### H2 — la détermination du logarithme de coupure $\R_+$ (argument dans $]0,2\pi[$)

**Rôle.** La coupure doit (a) éviter le pôle $-1$, pour que $f$ soit méromorphe sur un ouvert simplement connexe contenant le contour, et (b) être portée par l'axe d'intégration, pour que les deux bords de la coupure portent des valeurs de $z^{\alpha-1}$ différant du facteur $e^{2i\pi\alpha}$.

**Si on la retire.** Avec la détermination principale (coupure $\R_-$), la coupure passe par le pôle $-1$ : $f$ n'est méromorphe sur aucun voisinage de $-1$, et la formule des résidus ne s'applique pas au contour. De plus $z^{\alpha-1}$ serait continue à travers $]0,+\infty[$, de sorte que les intégrales sur $\gamma_+$ et $\gamma_-$ se compenseraient exactement : aucune information sur $J$.

## Idée de la preuve

Formule des résidus sur le trou de serrure : un seul pôle $-1$, de résidu $e^{(\alpha-1)i\pi}=-e^{i\alpha\pi}$. Les deux arcs de cercle tendent vers $0$ ; les deux segments donnent $J$ et $-e^{2i\pi\alpha}J$. D'où $(1-e^{2i\pi\alpha})J=-2i\pi e^{i\alpha\pi}$.

## Preuve

*Précision par rapport au poly :* $f$ n'est pas définie sur $\R_+$, donc les segments « juste au-dessus / en dessous » de l'axe réel s'entendent comme limites de segments d'angle $\delta$ et $2\pi-\delta$, $\delta\to0^+$. On fait ce passage à la limite explicitement.

**Étape 0 — la fonction.** $\C\setminus\R_+$ est étoilé en $-1$ (pour $z\notin\R_+$, un point $(1-t)(-1)+tz$ du segment $[-1,z]$ n'est réel que si $t=0$ ou $z\in\R$, et alors $z<0$ et ce point est $<0$), donc simplement connexe ([[ch02-etoile-simplement-connexe]]). Par [[ch02-logarithme-existence]], $z$ y a un logarithme ; on choisit celui, noté $\mathrm{Log}$, tel que $\mathrm{Log}(re^{i\theta})=\log r+i\theta$ pour $\theta\in]0,2\pi[$ (c'est $w\mapsto\mathrm{Log}_{\mathrm{princ}}(-w)+i\pi$, qui est bien holomorphe sur $\C\setminus\R_+$ et d'exponentielle $-(-w)=w$). Alors $z\mapsto z^{\alpha-1}=e^{(\alpha-1)\mathrm{Log}(z)}$ est holomorphe sur $\Omega:=\C\setminus\R_+$, et $f(z)=\frac{z^{\alpha-1}}{1+z}$ est méromorphe sur $\Omega$ avec pour seul pôle $-1$, simple. Pour $z=re^{i\theta}$, $\theta\in]0,2\pi[$, on a $|z^{\alpha-1}|=r^{\alpha-1}$ ($\alpha$ réel).

**Étape 1 — le résidu.** $z\mapsto z^{\alpha-1}$ est holomorphe en $-1$ et $\frac{1}{1+z}$ a un pôle simple en $-1$ de résidu $1$, donc ([[ch02-residu-pole-simple]], Remarque II.4.12)
$$
\Res_{-1}(f)=(-1)^{\alpha-1}=e^{(\alpha-1)\mathrm{Log}(-1)}=e^{(\alpha-1)i\pi}=-e^{i\alpha\pi}.
$$

**Étape 2 — la formule des résidus.** Soient $0<\eps<1<R$ et $0<\delta<\pi/2$. Soit $U=\{re^{i\theta}\,;\,\eps<r<R,\ \delta<\theta<2\pi-\delta\}$ : c'est un ouvert connexe borné dont l'adhérence est contenue dans $\Omega$, qui contient $-1$, et dont le bord, parcouru dans le sens direct, est le lacet $\Gamma=\gamma_+^\delta\vee C_R^\delta\vee\gamma_-^\delta\vee C_\eps^\delta$ :
* $\gamma_+^\delta$ : $x\mapsto xe^{i\delta}$, $x$ de $\eps$ à $R$ ;
* $C_R^\delta$ : $\theta\mapsto Re^{i\theta}$, $\theta$ de $\delta$ à $2\pi-\delta$ ;
* $\gamma_-^\delta$ : $x\mapsto xe^{i(2\pi-\delta)}$, $x$ de $R$ à $\eps$ ;
* $C_\eps^\delta$ : $\theta\mapsto\eps e^{i\theta}$, $\theta$ de $2\pi-\delta$ à $\delta$ (sens horaire).

$f$ n'a pas de pôle sur $\Gamma$, et la formule (II.6.1) ([[ch02-formule-residus-pratique]]) donne
$$
\int_{\gamma_+^\delta}f+\int_{C_R^\delta}f+\int_{\gamma_-^\delta}f+\int_{C_\eps^\delta}f=2i\pi\,\Res_{-1}(f)=-2i\pi e^{i\alpha\pi}.\qquad(\ast)
$$

**Étape 3 — les arcs.** Sur $C_R^\delta$, $|1+z|\ge R-1$ et $|z^{\alpha-1}|=R^{\alpha-1}$ ; la longueur est $\le2\pi R$. Par [[ch01-longueur-majoration-integrale]],
$$
\Big|\int_{C_R^\delta}f\Big|\le2\pi R\cdot\frac{R^{\alpha-1}}{R-1}=\frac{2\pi R^{\alpha}}{R-1}\xrightarrow[R\to+\infty]{}0\quad(\alpha<1).
$$
Sur $C_\eps^\delta$, $|1+z|\ge1-\eps$ et $|z^{\alpha-1}|=\eps^{\alpha-1}$ :
$$
\Big|\int_{C_\eps^\delta}f\Big|\le2\pi\eps\cdot\frac{\eps^{\alpha-1}}{1-\eps}=\frac{2\pi\eps^{\alpha}}{1-\eps}\xrightarrow[\eps\to0]{}0\quad(\alpha>0).
$$
Ces majorations sont **uniformes en $\delta$**.

**Étape 4 — les segments ($\delta\to0$).** Sur $\gamma_+^\delta$, $z=xe^{i\delta}$, $\mathrm{Log}(z)=\log x+i\delta$, $dz=e^{i\delta}dx$ :
$$
\int_{\gamma_+^\delta}f=\int_\eps^R\frac{x^{\alpha-1}e^{i\alpha\delta}}{1+xe^{i\delta}}\,dx\xrightarrow[\delta\to0]{}\int_\eps^R\frac{x^{\alpha-1}}{1+x}\,dx=:J_{\eps,R},
$$
car l'intégrande est continu en $(x,\delta)\in[\eps,R]\times[0,\pi/2]$ (on a $|1+xe^{i\delta}|^2=1+2x\cos\delta+x^2\ge1$), donc converge uniformément sur le segment compact $[\eps,R]$. Sur $\gamma_-^\delta$, $z=xe^{i(2\pi-\delta)}$, $\mathrm{Log}(z)=\log x+i(2\pi-\delta)$, $z^{\alpha-1}dz=x^{\alpha-1}e^{i\alpha(2\pi-\delta)}dx$, et l'on parcourt de $R$ à $\eps$ :
$$
\int_{\gamma_-^\delta}f=-\int_\eps^R\frac{x^{\alpha-1}e^{i\alpha(2\pi-\delta)}}{1+xe^{-i\delta}}\,dx\xrightarrow[\delta\to0]{}-e^{2i\pi\alpha}J_{\eps,R}.
$$

**Étape 5 — conclusion.** Dans $(\ast)$, les deux intégrales sur les segments ont une limite quand $\delta\to0$ ; donc la somme $A(\delta)$ des deux intégrales sur les arcs aussi, et $|\lim A|\le\frac{2\pi R^{\alpha}}{R-1}+\frac{2\pi\eps^{\alpha}}{1-\eps}$ par l'étape 3. Ainsi
$$
\Big|(1-e^{2i\pi\alpha})J_{\eps,R}+2i\pi e^{i\alpha\pi}\Big|\le\frac{2\pi R^{\alpha}}{R-1}+\frac{2\pi\eps^{\alpha}}{1-\eps}.
$$
Quand $\eps\to0$ et $R\to+\infty$, $J_{\eps,R}\to J$ (intégrale convergente par H1) et le membre de droite tend vers $0$ : $(1-e^{2i\pi\alpha})J=-2i\pi e^{i\alpha\pi}$. Comme $\alpha\notin\Z$, $1-e^{2i\pi\alpha}\neq0$ et
$$
J=\frac{-2i\pi e^{i\alpha\pi}}{1-e^{2i\pi\alpha}}=\frac{-2i\pi}{e^{-i\alpha\pi}-e^{i\alpha\pi}}=\frac{2i\pi}{e^{i\alpha\pi}-e^{-i\alpha\pi}}=\frac{2i\pi}{2i\sin(\alpha\pi)}=\frac{\pi}{\sin(\alpha\pi)}.\qquad\square
$$

## Preuve à trous

On prend sur $\Omega=\C\setminus\R_+$ (simplement connexe) le logarithme d'argument dans $]0,2\pi[$ et $f(z)=\frac{z^{\alpha-1}}{1+z}$, méromorphe sur $\Omega$, de seul pôle $-1$. Son résidu est <trou indice="pôle simple de 1/(1+z), facteur holomorphe z^(α-1) ; attention à la détermination">$\Res_{-1}(f)=e^{(\alpha-1)\mathrm{Log}(-1)}=e^{(\alpha-1)i\pi}=-e^{i\alpha\pi}$</trou>. La formule des résidus sur le trou de serrure (segments d'angles $\delta$ et $2\pi-\delta$, arcs de rayons $R$ et $\eps$) donne
$$
\int_{\gamma_+^\delta}f+\int_{C_R^\delta}f+\int_{\gamma_-^\delta}f+\int_{C_\eps^\delta}f=-2i\pi e^{i\alpha\pi}.
$$
Les arcs se majorent par <trou indice="sup du module fois longueur">$\frac{2\pi R^{\alpha}}{R-1}$ et $\frac{2\pi\eps^{\alpha}}{1-\eps}$, qui tendent vers $0$ car $\alpha<1$, resp. $\alpha>0$</trou>. Quand $\delta\to0$, l'intégrale sur $\gamma_+^\delta$ tend vers $J_{\eps,R}=\int_\eps^R\frac{x^{\alpha-1}}{1+x}dx$, et celle sur $\gamma_-^\delta$ tend vers <trou indice="sur le bord inférieur, l'argument vaut 2π, et on parcourt de R vers ε">$-e^{2i\pi\alpha}J_{\eps,R}$, car $z^{\alpha-1}=x^{\alpha-1}e^{2i\pi(\alpha-1)}=x^{\alpha-1}e^{2i\pi\alpha}$</trou>. À la limite $\eps\to0$, $R\to+\infty$ : $(1-e^{2i\pi\alpha})J=-2i\pi e^{i\alpha\pi}$, d'où <trou>$J=\frac{2i\pi}{e^{i\alpha\pi}-e^{-i\alpha\pi}}=\frac{\pi}{\sin(\alpha\pi)}$</trou>. $\square$

## Exemples

* **Contrôle pour $\alpha=\frac12$.** La formule donne $J=\pi$. Directement : avec $x=t^2$, $\int_0^{+\infty}\frac{x^{-1/2}}{1+x}dx=\int_0^{+\infty}\frac{2\,dt}{1+t^2}=2\cdot\frac\pi2=\pi$. ✓
* **Conséquence : $\int_0^{+\infty}\frac{dt}{1+t^n}=\frac{\pi/n}{\sin(\pi/n)}$ pour $n\ge2$.** Le changement de variable $x=t^n$ ($t=x^{1/n}$, $dt=\frac1n x^{\frac1n-1}dx$) donne $\int_0^{+\infty}\frac{dt}{1+t^n}=\frac1n\int_0^{+\infty}\frac{x^{\frac1n-1}}{1+x}dx=\frac1n\cdot\frac{\pi}{\sin(\pi/n)}$, avec $\alpha=\frac1n\in]0,1[$. Pour $n=2$ : $\frac\pi2$ ✓ ; pour $n=4$ : $\frac{\pi}{4\sin(\pi/4)}=\frac{\pi}{2\sqrt2}$.
* **Extension à $\alpha$ complexe.** Pour $0<\Re(\alpha)<1$, $J(\alpha)=\int_0^{+\infty}\frac{x^{\alpha-1}}{1+x}dx$ converge ($|x^{\alpha-1}|=x^{\Re\alpha-1}$) et définit une fonction holomorphe de $\alpha$ sur la bande (holomorphie sous l'intégrale, avec domination locale par $\frac{x^{a-1}+x^{b-1}}{1+x}$ pour $a\le\Re\alpha\le b$, [[ch01-holomorphie-sous-integrale]]) ; $\frac{\pi}{\sin(\pi\alpha)}$ est holomorphe sur la bande ($\sin(\pi\alpha)=0\iff\alpha\in\Z$). Les deux coïncident sur $]0,1[$, qui a des points d'accumulation dans la bande connexe : par prolongement analytique ([[ch01-prolongement-analytique]]), $J(\alpha)=\frac{\pi}{\sin(\pi\alpha)}$ sur toute la bande.

## Pièges

* > ⚠️ **Oublier le facteur $e^{2i\pi\alpha}$ sur $\gamma_-$** donne $J-J=0=-2i\pi e^{i\alpha\pi}$, absurde : c'est précisément le saut à travers la coupure qui fait marcher la méthode.
* > ⚠️ **Mauvaise détermination** : avec $\mathrm{Log}$ principal, $(-1)^{\alpha-1}$ n'est pas défini ($-1$ est sur la coupure $\R_-$). Avec la coupure $\R_+$ et l'argument dans $]0,2\pi[$, $\mathrm{Log}(-1)=+i\pi$ (et non $-i\pi$) : le résidu est $e^{(\alpha-1)i\pi}=-e^{i\alpha\pi}$.
* Orientation : $C_\eps$ est parcouru dans le sens **horaire** (le petit cercle contourne le point de branchement $0$ en laissant le domaine à gauche) ; $\gamma_-$ va de $R$ vers $\eps$, d'où le signe $-$.
* Les segments ne sont pas « sur » $\R_+$, où $f$ n'est pas définie : ce sont des limites (bords de la coupure). Il faut une majoration des arcs uniforme en $\delta$ ou un argument de continuité pour passer à la limite.
* Ne pas oublier de vérifier la convergence de $J$ (H1) avant de manipuler ; diviser par $1-e^{2i\pi\alpha}$ exige $\alpha\notin\Z$.
