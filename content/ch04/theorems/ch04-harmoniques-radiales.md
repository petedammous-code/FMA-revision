---
id: ch04-harmoniques-radiales
type: proposition
chapter: 4
title: "Fonctions harmoniques invariantes par rotation sur $\C^\times$"
ref: "non numéroté, section IV.4.2, p. 85 (fonctions harmoniques radiales ; Exercice IV.4.2)"
page: 85
importance: 2
depends: [ch04-harmonique-def, ch05-composition-differentielles, ch05-lemme-schwarz, ch04-holomorphe-implique-harmonique, ch02-logarithme-determination-principale-def, ch01-integrale-primitive]
tags: [harmonique, radial, laplacien-polaire, logarithme, couronne, chaleur]
---
## Intuition

> 💡 Une fonction harmonique est « sans bosse ni creux » : sa valeur en un point est la moyenne de ses valeurs sur tout petit cercle centré en ce point ([[ch04-harmonique-moyenne-maximum]]). Si de plus elle ne dépend que de la distance à l'origine, $u(z)=\varphi(|z|)$, son graphe est une surface de révolution ; la condition de laplacien nul devient une équation différentielle **ordinaire** en $r=|z|$, et l'on trouve que $\varphi$ doit être un logarithme : $\varphi(r)=\alpha\ln r+\beta$. Image mentale : la température autour d'un fil chauffant infiniment long, ou le potentiel électrique d'une ligne chargée, décroissent en $\log$ de la distance, pas en $1/r$ comme en dimension $3$.

La raison du $\log$ : le flux de $\nabla u$ à travers le cercle $C(0,r)$ vaut $2\pi r\,\varphi'(r)$ ; harmonique signifie « flux conservé » (divergence nulle), donc $r\varphi'(r)$ est constant et $\varphi'(r)=\alpha/r$.

Rappels. Une fonction $u:\Omega\to\R$ (ou $\C$) de classe $C^2$ est **harmonique** si $\Delta u=\partial_x^2u+\partial_y^2u=0$ ([[ch04-harmonique-def]]). On note $\C^\times=\C\setminus\{0\}$. Une fonction $u$ sur $\C^\times$ est **invariante par rotation** si $u(e^{it}z)=u(z)$ pour tous $z\in\C^\times$, $t\in\R$ ; c'est équivalent à l'existence de $\varphi:\,]0,+\infty[\,\to\R$ telle que $u(z)=\varphi(|z|)$ (prendre $\varphi(r)=u(r)$ : tout $z$ de module $r$ s'écrit $e^{it}r$). On dit aussi **radiale**.

## Énoncé

**Proposition (poly, section IV.4.2, p. 85 ; Exercice IV.4.2, p. 86).** Les fonctions harmoniques définies sur $\C^\times$ et invariantes par rotation sont exactement les fonctions
$$
z\longmapsto\alpha\log|z|+\beta ,
$$
où $\alpha$ et $\beta$ sont des constantes (réelles si $u$ est réelle, complexes sinon).

*Outil (Exercice IV.4.2) : laplacien en coordonnées polaires.* Si $u$ est de classe $C^2$ sur un ouvert de $\C^\times$ et $v(r,\theta):=u(r\cos\theta,r\sin\theta)$, alors
$$
\Delta u=\frac{\partial^2v}{\partial r^2}+\frac1r\frac{\partial v}{\partial r}+\frac1{r^2}\frac{\partial^2v}{\partial\theta^2}
\qquad(\text{évalué en }(r,\theta)\text{ et en }z=re^{i\theta}\text{ respectivement}).
$$

## Hypothèses

### H1 — $u$ de classe $C^2$ sur $\C^\times$

**Rôle.** C'est la régularité exigée par la définition d'une fonction harmonique ; elle garantit que $\varphi(r)=u(r,0)$ est $C^2$ sur $]0,+\infty[$ et autorise le calcul du laplacien.

**Si on la retire.** La conclusion reste vraie mais la preuve change : une fonction harmonique est automatiquement $C^\infty$ ([[ch04-harmonique-def]], H2). En revanche, si l'on ne suppose pas $\Delta u=0$ au sens classique, il n'y a rien à dire : $u(z)=|z|$ est radiale, continue, non harmonique ($\Delta|z|=1/|z|\neq0$ d'après la formule polaire : $\varphi(r)=r$, $\varphi''+\varphi'/r=1/r$).

### H2 — Invariance par rotation

**Rôle.** Elle supprime la dépendance en $\theta$ ($\partial_\theta v=0$) et transforme l'EDP $\Delta u=0$ en l'équation différentielle ordinaire $\varphi''+\varphi'/r=0$.

**Si on la retire.** Il y a bien d'autres fonctions harmoniques sur $\C^\times$ : $\Re(z)=r\cos\theta$, $\Re(1/z)=\cos\theta/r$, $\Re(z^n)=r^n\cos n\theta$ ($n\in\Z$), et plus généralement les $r^{\pm n}\cos n\theta$, $r^{\pm n}\sin n\theta$ (vérification par la formule polaire : $\partial_r^2+\tfrac1r\partial_r$ appliqué à $r^{\pm n}$ donne $n^2r^{\pm n-2}$, qui compense $\tfrac1{r^2}\partial_\theta^2(\cos n\theta)=-n^2\cos n\theta/r^2$). Aucune n'est radiale sauf les constantes ($n=0$).

### H3 — Le domaine est $\C^\times$ (ou un ouvert invariant par rotation ne contenant pas $0$)

**Rôle.** L'hypothèse « invariante par rotation » n'a de sens que sur un domaine invariant par rotation. Le résultat et sa preuve valent sans changement sur une couronne $\{R^-<|z|<R^+\}$, le disque épointé, l'extérieur d'un disque. Le point $0$ doit être exclu : $\log|z|$ y est singulier.

**Si on la retire.** Sur $\C$ **tout entier** (ou sur un disque $D(0,R)$), une fonction harmonique radiale est **constante** : sur $\C^\times$ elle vaut $\alpha\log|z|+\beta$, et la continuité en $0$ impose $\alpha=0$ puisque $\log|z|\to-\infty$ quand $z\to0$. Ainsi $\log|z|$ n'est pas prolongeable en une fonction harmonique sur $\C$ (ni même continue en $0$).

## Idée de la preuve

Laplacien en polaires par la règle de la chaîne. Pour $u=\varphi(r)$ : $\Delta u=\varphi''+\varphi'/r=\tfrac1r(r\varphi')'$, donc $r\varphi'=\alpha$ constant, $\varphi=\alpha\ln r+\beta$. Réciproquement $\log|z|=\Re(\mathrm{Log}\,z)$ localement, donc harmonique.

## Preuve

*Le poly renvoie à l'Exercice IV.4.2 ; voici une rédaction complète.*

**Étape 1 : laplacien en coordonnées polaires.** Soit $u$ de classe $C^2$ sur un ouvert de $\C^\times$ et $v(r,\theta)=u(x,y)$ avec $x=r\cos\theta$, $y=r\sin\theta$. Par la règle de la chaîne ([[ch05-composition-differentielles]]), en notant $u_x,u_y,\dots$ les dérivées partielles évaluées en $(r\cos\theta,r\sin\theta)$ :
$$
v_r=u_x\cos\theta+u_y\sin\theta,\qquad v_\theta=-r\,u_x\sin\theta+r\,u_y\cos\theta .
$$
En dérivant une seconde fois (les fonctions $u_x,u_y$ sont $C^1$, on leur applique la même règle) :
$$
\begin{aligned}
v_{rr}&=u_{xx}\cos^2\theta+2u_{xy}\cos\theta\sin\theta+u_{yy}\sin^2\theta,\\
v_{\theta\theta}&=-r\,u_x\cos\theta-r\,u_y\sin\theta+r^2\big(u_{xx}\sin^2\theta-2u_{xy}\sin\theta\cos\theta+u_{yy}\cos^2\theta\big),
\end{aligned}
$$
où l'on a utilisé $u_{xy}=u_{yx}$ (théorème de Schwarz, $u$ étant $C^2$, [[ch05-lemme-schwarz]]). On reconnaît $-r\,u_x\cos\theta-r\,u_y\sin\theta=-r\,v_r$, et en additionnant $v_{rr}+\frac1{r^2}v_{\theta\theta}$ les termes croisés en $u_{xy}$ se détruisent tandis que $\cos^2\theta+\sin^2\theta=1$ :
$$
v_{rr}+\frac1{r^2}v_{\theta\theta}=u_{xx}+u_{yy}-\frac1r v_r ,\qquad\text{soit}\qquad \Delta u=v_{rr}+\frac1rv_r+\frac1{r^2}v_{\theta\theta}.
$$

**Étape 2 : réduction à une équation différentielle.** Soit $u$ harmonique sur $\C^\times$ et invariante par rotation. Posons $\varphi(r):=u(r)$ pour $r>0$ ; alors $u(z)=\varphi(|z|)$ (voir l'Intuition) et $\varphi$ est de classe $C^2$ sur $]0,+\infty[$ comme restriction de $u$ à la demi-droite réelle positive. Ici $v(r,\theta)=\varphi(r)$ ne dépend pas de $\theta$, donc $v_\theta=v_{\theta\theta}=0$ et l'étape 1 donne, pour tout $r>0$,
$$
0=\Delta u=\varphi''(r)+\frac1r\varphi'(r)=\frac1r\big(r\varphi'(r)\big)' .
$$

**Étape 3 : résolution.** Ainsi $(r\varphi')'=0$ sur l'intervalle $]0,+\infty[$ : la fonction $r\mapsto r\varphi'(r)$ est constante, égale à un certain $\alpha$. Donc $\varphi'(r)=\alpha/r$, et en intégrant sur l'intervalle $]0,+\infty[$, $\varphi(r)=\alpha\ln r+\beta$ pour une constante $\beta$. D'où $u(z)=\alpha\log|z|+\beta$.

**Étape 4 : réciproque.** Les fonctions $\alpha\log|z|+\beta$ sont radiales, de classe $C^\infty$ sur $\C^\times$, et harmoniques : avec $\varphi(r)=\alpha\ln r+\beta$, $\varphi''+\varphi'/r=-\alpha/r^2+\alpha/r^2=0$. Autre justification : au voisinage de tout point de $\C^\times$, $\log|z|=\Re(L(z))$ pour une détermination locale $L$ du logarithme (par exemple $\mathrm{Log}$ sur $\C\setminus\,]-\infty,0]$, [[ch02-logarithme-determination-principale-def]], et $z\mapsto\mathrm{Log}(-z)+i\pi$ sur $\C\setminus[0,+\infty[$), et la partie réelle d'une fonction holomorphe est harmonique ([[ch04-holomorphe-implique-harmonique]]) ; l'harmonicité étant une propriété locale, $\log|z|$ est harmonique sur $\C^\times$. $\square$

**Complément important : $\log|z|$ n'est pas globalement la partie réelle d'une fonction holomorphe sur $\C^\times$.** Supposons $\log|z|=\Re(F)$ avec $F$ holomorphe sur $\C^\times$. Pour $F$ holomorphe, $\partial_zF=F'$ et $\partial_z\bar F=\overline{\partial_{\bar z}F}=0$, donc $\partial_z\Re(F)=\tfrac12F'$ ; par ailleurs $\partial_z\log|z|=\tfrac12\partial_z\log(z\bar z)=\tfrac1{2z}$. On aurait donc $F'(z)=1/z$ sur $\C^\times$ : $1/z$ admettrait une primitive holomorphe sur $\C^\times$, et son intégrale sur le lacet $C(0,1)$ serait nulle ([[ch01-integrale-primitive]]), alors qu'elle vaut $2i\pi$. Contradiction. C'est l'exemple type qui montre que le Corollaire IV.2.4 ([[ch04-harmonique-reelle-partie-reelle]]) exige la simple connexité.

## Preuve à trous

**Laplacien polaire.** Avec $v(r,\theta)=u(r\cos\theta,r\sin\theta)$, la règle de la chaîne donne $v_r=u_x\cos\theta+u_y\sin\theta$ et $v_\theta=-ru_x\sin\theta+ru_y\cos\theta$, puis, en dérivant encore et en additionnant, <trou indice="les termes en $u_{xy}$ se détruisent ; le terme $-rv_r$ apparaît dans $v_{\theta\theta}$">$v_{rr}+\tfrac1{r^2}v_{\theta\theta}=u_{xx}+u_{yy}-\tfrac1rv_r$, soit $\Delta u=v_{rr}+\tfrac1rv_r+\tfrac1{r^2}v_{\theta\theta}$</trou>.

**Réduction.** Si $u$ est radiale, $u(z)=\varphi(|z|)$ avec $\varphi$ de classe $C^2$, et $\Delta u=0$ s'écrit <trou indice="plus de dérivée en $\theta$ ; mettre sous forme d'une dérivée exacte">$\varphi''+\tfrac1r\varphi'=\tfrac1r(r\varphi')'=0$</trou>.

**Résolution.** Donc <trou indice="une fonction de dérivée nulle sur un intervalle">$r\varphi'(r)=\alpha$ est constante, $\varphi'=\alpha/r$ et $\varphi=\alpha\ln r+\beta$</trou>. Réciproquement $\alpha\log|z|+\beta$ est harmonique car <trou indice="partie réelle d'une fonction holomorphe locale">localement $\log|z|=\Re(\mathrm{Log}\,z)$ (ou directement $-\alpha/r^2+\alpha/r^2=0$)</trou>. $\square$

## Exemples

* **Température dans une couronne centrée.** Pour $T$ harmonique sur $\{R^-<|z|<R^+\}$ valant $T^-$ sur $|z|=R^-$ et $T^+$ sur $|z|=R^+$, on cherche $T=\alpha\ln|z|+\beta$ : le système $\alpha\ln R^-+\beta=T^-$, $\alpha\ln R^++\beta=T^+$ donne $\alpha=\dfrac{T^+-T^-}{\ln R^+-\ln R^-}$ et $\beta=\dfrac{T^-\ln R^+-T^+\ln R^-}{\ln R^+-\ln R^-}$ ; c'est la formule du poly p. 86, et c'est **la** solution par unicité : voir [[ch04-chaleur-couronne]]. Exemple numérique : $R^-=1$, $R^+=e$, $T^-=100$, $T^+=0$ : $T(z)=-100\log|z|+100$ ; à mi-chemin « géométrique » $|z|=\sqrt e$, $T=50$, alors qu'à mi-chemin « arithmétique » $|z|=(1+e)/2\simeq1{,}86$, $T\simeq100-100\times0{,}620=38$ : la température n'est pas affine en la distance, elle décroît plus vite près du cylindre intérieur.
* **Fil infini.** Le potentiel électrique créé dans le plan par une ligne chargée (ou la température autour d'un fil chauffant) est radial et harmonique hors du fil : il vaut $\alpha\log|z|+\beta$ (en pratique $-\frac{\lambda}{2\pi\varepsilon_0}\log|z|$ pour une densité linéique $\lambda$). Il n'est pas borné, ni à l'infini ni près du fil, contrairement au potentiel $1/|x|$ d'une charge ponctuelle en dimension $3$.
* **Comparaison avec $\R^n$.** Pour $u=\varphi(|x|)$ sur $\R^n\setminus\{0\}$, $\Delta u=\varphi''+\dfrac{n-1}r\varphi'$, et les solutions radiales sont $\alpha r^{2-n}+\beta$ pour $n\ge3$ (vérification : $\varphi=r^{2-n}$ donne $\varphi''+\tfrac{n-1}r\varphi'=(2-n)r^{-n}\big[(1-n)+(n-1)\big]=0$) ; le logarithme est propre à la dimension $2$, cas où $r^{2-n}$ dégénère en constante.

## Pièges

* > ⚠️ Le résultat est sur $\C^\times$. Sur $\C$ tout entier, la seule fonction harmonique radiale est la constante ($\alpha=0$).
* > ⚠️ $\log|z|$ est harmonique sur $\C^\times$ mais n'est **pas** la partie réelle d'une fonction holomorphe sur $\C^\times$ (complément de la preuve) : ne pas invoquer le Corollaire IV.2.4 sur un ouvert non simplement connexe. Elle l'est localement, et sur tout ouvert simplement connexe de $\C^\times$.
* La formule polaire a un terme $\frac1r\partial_r$ souvent oublié : $\Delta\neq\partial_r^2+\frac1{r^2}\partial_\theta^2$. Sans lui on trouverait $\varphi$ affine en $r$, ce qui est faux ($|z|$ n'est pas harmonique).
* $\log|z|=\ln r$ est le logarithme réel du module ; ne pas confondre avec $\mathrm{Log}\,z$ (complexe, défini sur $\C\setminus\,]-\infty,0]$ seulement) dont il est la partie réelle.
* Ne pas confondre « radiale » et « à symétrie » quelconque : $\Re(z^n)$ est invariante par les rotations d'angle $2\pi/n$ seulement, et n'est pas de la forme $\alpha\log|z|+\beta$.
