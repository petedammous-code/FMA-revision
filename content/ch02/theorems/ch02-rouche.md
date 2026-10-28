---
id: ch02-rouche
type: theorem
chapter: 2
title: Théorème de Rouché (1862)
ref: Théorème II.8.4
page: 54
importance: 3
depends: [ch02-principe-argument-domaine, ch02-cauchy-simplement-connexe, ch02-etoile-simplement-connexe, ch02-meromorphes-corps, ch02-indice-def, ch02-principe-argument, ch01-derivee-f-rond-gamma]
tags: [rouche, zeros, poles, comptage, principe-argument, perturbation]
---
## Intuition

> 💡 **Le chien et son maître.** Un maître se promène autour d'un arbre (l'origine) en suivant le chemin $g(\Gamma)$ ; son chien suit le chemin $f(\Gamma)$, tenu par une laisse de longueur $|f-g|$. Si la laisse est toujours **plus courte** que la distance $|g|$ du maître à l'arbre, le chien ne peut pas passer de l'autre côté de l'arbre : il fait autour de l'arbre exactement le même nombre de tours que son maître.

Or, par le principe de l'argument ([[ch02-principe-argument-domaine]]), le nombre de tours de $g(\Gamma)$ autour de $0$ est $Z(g,U)-P(g,U)$, le nombre de zéros moins le nombre de pôles de $g$ dans $U$. D'où le théorème : **une petite perturbation $f$ de $g$ (petite devant $|g|$ sur le bord) a autant de zéros moins de pôles que $g$ dans $U$.** En pratique : on choisit pour $g$ le terme « dominant » de $f$ sur le bord, dont on connaît les zéros.

Notations ([[ch02-pole-meromorphe-def]]) : $Z(f,U)$, $P(f,U)$ = nombre de zéros, de pôles de $f$ dans $U$, comptés avec multiplicité ; $\Gamma=\partial U$ est le bord de $U$, « orienté positivement » = parcouru une fois, $U$ à gauche.

## Énoncé

**Théorème (poly, Théorème II.8.4, p. 54).** Soient $f$ et $g$ deux fonctions méromorphes sur un ouvert $\Omega$ de $\C$, et $U$ un ouvert tel que $\bar U\subset\Omega$. On suppose que le bord $\Gamma$ de $U$ est un lacet orienté positivement, ne contenant ni pôle ni zéro des fonctions $f$ et $g$, et que
$$
|f(z)-g(z)|<|g(z)|\qquad\text{pour tout } z\in\Gamma .
$$
Alors
$$
Z(f,U)-P(f,U)=Z(g,U)-P(g,U),
$$
où $Z(f,U)$ et $P(f,U)$ (respectivement $Z(g,U)$ et $P(g,U)$) sont le nombre de zéros et de pôles de $f$ (respectivement de $g$) dans $U$ (les zéros et pôles étant comptés avec multiplicité).

(Comme le Corollaire II.8.2, l'énoncé utilise les faits admis de la Remarque II.8.3 : indice $1$ de $\Gamma$ sur $U$ et théorème de Jordan.)

## Hypothèses

### H1 — Inégalité **stricte** $|f-g|<|g|$

**Rôle.** Elle force $g\neq0$ et $f\neq0$ sur $\Gamma$ (si $f(z)=0$, elle s'écrirait $|g(z)|<|g(z)|$), et elle place le lacet $h(\Gamma)$, où $h=f/g$, dans le disque $D(1,1)$, qui ne contient pas $0$.

**Si on la retire.** Avec seulement $|f-g|\le|g|$ : $f(z)=z-1$, $g(z)=z$, $U=D(0,1)$. Sur $C(0,1)$, $|f-g|=1=|g|$. Mais $Z(g,U)=1$ alors que $Z(f,U)=0$ (le zéro $1$ de $f$ est **sur** $\Gamma$). Le vrai danger de l'égalité est un zéro sur le bord : si $|f-g|\le|g|$ sur $\Gamma$ **et** $f,g$ ne s'annulent pas sur $\Gamma$, alors $h(\Gamma)\subset\bar D(1,1)\setminus\{0\}\subset\{\Re w>0\}$ (car $|w-1|\le1$ équivaut à $|w|^2\le2\Re w$) et la preuve passe encore.

### H2 — L'inégalité a lieu en **tout** point de $\Gamma$

**Rôle.** C'est l'inclusion de **tout** le lacet $h(\Gamma)$ dans $D(1,1)$ qui donne $\Ind_0(h\circ\Gamma)=0$.

**Si on la retire.** $f(z)=z$, $g(z)=1$, $U=D(0,1)$ : $|f-g|=|z-1|<1=|g|$ seulement sur l'arc de $C(0,1)$ où $\Re z>\frac12$. Et $Z(f,U)=1\neq0=Z(g,U)$.

### H3 — $f,g$ méromorphes sur un ouvert contenant $\bar U$

**Rôle.** On applique le principe de l'argument à $f$ et à $g$ sur $U$ ([[ch02-principe-argument-domaine]]), ce qui demande des fonctions méromorphes sur un voisinage de $\bar U$ (et assure que les décomptes sont finis).

**Si on la retire.** $g\equiv1$ et $f(z)=1+\frac1{2e}e^{1/z}$, holomorphes sur $\C\setminus\{0\}$ mais pas méromorphes en $0\in U=D(0,1)$. Sur $C(0,1)$, $|e^{1/z}|=e^{\Re(1/z)}=e^{\cos\theta}\le e$, donc $|f-g|\le\frac12<1=|g|$. Pourtant $f$ a une **infinité** de zéros dans $D(0,1)\setminus\{0\}$ : $z_k=\big(1+\log2+i\pi(2k+1)\big)^{-1}$, $k\in\Z$ (on a $e^{1/z_k}=2e\cdot e^{i\pi(2k+1)}=-2e$, et $|1/z_k|\ge\pi>1$), alors que $g$ n'en a aucun.

### H4 — $\Gamma$ orienté positivement

**Rôle.** Elle sert à identifier $\frac1{2i\pi}\int_\Gamma\frac{f'}f$ à $Z(f,U)-P(f,U)$ (et de même pour $g$).

**Si on la retire.** Hypothèse de confort : si $\Gamma$ est orienté négativement, les deux intégrales valent $-(Z-P)$ et l'égalité $Z(f,U)-P(f,U)=Z(g,U)-P(g,U)$ reste vraie. En revanche, il faut que $\Gamma$ soit le bord de $U$ parcouru **une** fois (lacet simple) pour que les intégrales comptent les zéros de $U$.

## Idée de la preuve

On pose $h=f/g$ : l'hypothèse dit $|1-h|<1$ sur $\Gamma$, donc le lacet $h(\Gamma)$ reste dans le disque $D(1,1)$, qui ne contient pas $0$ : il ne tourne pas autour de $0$. Or son nombre de tours est $\frac1{2i\pi}\int_\Gamma\frac{h'}{h}=\frac1{2i\pi}\int_\Gamma\frac{f'}{f}-\frac1{2i\pi}\int_\Gamma\frac{g'}{g}$ ; on conclut par le principe de l'argument.

## Preuve

*Préliminaires.* L'hypothèse implique que $g$ ne s'annule pas sur $\Gamma$ (sinon $|f-g|<0$) et que $f$ non plus (sinon $|g|<|g|$). Soit $\Omega_0$ la composante connexe de $\Omega$ contenant $\bar U$ (connexe : voir [[ch02-principe-argument-domaine]]) ; $g$ n'y est pas identiquement nulle, donc, $\mathcal M(\Omega_0)$ étant un corps ([[ch02-meromorphes-corps]]), $h:=f/g$ est méromorphe sur $\Omega_0$. Au voisinage de chaque point de $\Gamma$, $f$ et $g$ sont holomorphes (pas de pôle sur $\Gamma$) et $g\neq0$, donc $h$ est holomorphe sur un voisinage $V$ de $\Gamma$ et ne s'y annule pas (quitte à rétrécir $V$, car $f\ne0$ sur $\Gamma$). En divisant l'hypothèse par $|g(z)|>0$ :
$$
|1-h(z)|<1\qquad(\forall z\in\Gamma),
$$
c'est-à-dire que le lacet $h\circ\Gamma$ (qui est $C^1$ par morceaux) est contenu dans le disque $D(1,1)$.

*Le lacet image ne tourne pas autour de $0$.* $0\notin D(1,1)$, et $D(1,1)$, convexe donc étoilé, est simplement connexe ([[ch02-etoile-simplement-connexe]]). La fonction $w\mapsto1/w$ est holomorphe sur $D(1,1)$, donc par le théorème de Cauchy ([[ch02-cauchy-simplement-connexe]])
$$
\frac1{2i\pi}\int_{h\circ\Gamma}\frac{dw}{w}=0 .
$$

*Changement de variable.* Par la règle de dérivation $(h\circ\Gamma)'(t)=h'(\Gamma(t))\Gamma'(t)$ ([[ch01-derivee-f-rond-gamma]]),
$$
\int_{h\circ\Gamma}\frac{dw}{w}=\int_0^1\frac{h'(\Gamma(t))\Gamma'(t)}{h(\Gamma(t))}dt=\int_\Gamma\frac{h'(z)}{h(z)}dz .
$$
Sur $V$, $\frac{h'}{h}=\frac{f'g-fg'}{g^2}\cdot\frac gf=\frac{f'g-fg'}{fg}=\frac{f'}{f}-\frac{g'}{g}$. Donc
$$
0=\frac1{2i\pi}\int_\Gamma\frac{h'(z)}{h(z)}dz=\frac1{2i\pi}\int_\Gamma\frac{f'(z)}{f(z)}dz-\frac1{2i\pi}\int_\Gamma\frac{g'(z)}{g(z)}dz .
$$

*Conclusion.* $f$ et $g$ sont méromorphes sur $\Omega\supset\bar U$ et n'ont ni zéro ni pôle sur $\Gamma$ ; le principe de l'argument sur le bord d'un domaine ([[ch02-principe-argument-domaine]], poly, Corollaire II.8.2, p. 53) donne $\frac1{2i\pi}\int_\Gamma\frac{f'}{f}=Z(f,U)-P(f,U)$ et $\frac1{2i\pi}\int_\Gamma\frac{g'}{g}=Z(g,U)-P(g,U)$. D'où $Z(f,U)-P(f,U)=Z(g,U)-P(g,U)$. $\square$

## Preuve à trous

On pose <trou indice="quelle fonction auxiliaire ?">$h=f/g$, méromorphe, holomorphe et non nulle au voisinage de $\Gamma$</trou>. L'hypothèse se réécrit <trou>$|1-h(z)|<1$ sur $\Gamma$ : le lacet $h\circ\Gamma$ est contenu dans $D(1,1)$</trou>. Comme $D(1,1)$ est convexe (donc simplement connexe) et ne contient pas $0$, <trou indice="Cauchy pour 1/w">$\int_{h\circ\Gamma}\frac{dw}w=0$</trou>. Par changement de variable, $\int_{h\circ\Gamma}\frac{dw}{w}=\int_\Gamma\frac{h'}h$, et <trou indice="dérivée logarithmique d'un quotient">$\frac{h'}h=\frac{f'}f-\frac{g'}g$</trou>. Le principe de l'argument (Corollaire II.8.2) appliqué à $f$ et à $g$ donne <trou>$Z(f,U)-P(f,U)-\big(Z(g,U)-P(g,U)\big)=0$</trou>. $\square$

## Exemples

* **Localiser les racines d'un polynôme.** $f(z)=z^4-5z+1$. Sur $C(0,1)$, avec $g(z)=-5z$ : $|f-g|=|z^4+1|\le2<5=|g|$, donc $f$ a **un** zéro dans $D(0,1)$ (comme $g$). Sur $C(0,2)$, avec $g(z)=z^4$ : $|f-g|=|1-5z|\le11<16=|g|$, donc $f$ a **quatre** zéros dans $D(0,2)$. Comme l'inégalité stricte sur $C(0,1)$ interdit tout zéro de $f$ sur ce cercle, $f$ a exactement trois zéros dans la couronne $\{1<|z|<2\}$.
* **Une équation transcendante.** Nombre de solutions de $e^z=3z$ dans $D(0,1)$ : $f(z)=3z-e^z$, $g(z)=3z$. Sur $C(0,1)$, $|f-g|=|e^z|=e^{\Re z}\le e<3=|g|$. Donc une seule solution dans $D(0,1)$ ; elle est réelle, car $x\mapsto3x-e^x$ vaut $-1$ en $0$ et $3-e>0$ en $1$ (TVI), et c'est donc l'unique solution du disque.
* **Avec des pôles : on compare $Z-P$, pas $Z$.** $U=D(0,1)$, $f\equiv1$, $g(z)=\dfrac{z-\frac15}{z+\frac15}$. Sur $C(0,1)$ : $|f-g|=\dfrac{2/5}{|z+\frac15|}\le\dfrac{2/5}{4/5}=\dfrac12$ et $|g|\ge\dfrac{4/5}{6/5}=\dfrac23$, donc $|f-g|<|g|$. Rouché donne $0-0=1-1$ : vrai, mais $Z(g,U)=1\neq0=Z(f,U)$. Rouché ne dit rien sur $Z$ seul quand il y a des pôles.

## Pièges

* > ⚠️ Vérifier l'inégalité **stricte** en **tout** point du bord, avec une majoration explicite ($|z|=R$ fixé, inégalité triangulaire). « $f-g$ est petit » ne suffit pas.
* > ⚠️ Rouché compare $Z-P$. Pour des fonctions **holomorphes** sur un voisinage de $\bar U$, $P=0$ et l'on obtient $Z(f,U)=Z(g,U)$, la forme la plus utilisée.
* Choisir $g$ = le terme **dominant sur le bord considéré** : $z^4$ sur un grand cercle, $-5z$ sur le cercle unité dans le premier exemple. Le bon $g$ change avec le contour.
* Les rôles de $f$ et $g$ sont symétriques dans la conclusion : l'hypothèse $|f-g|<|f|$ sur $\Gamma$ donne la même conclusion (échanger $f$ et $g$). Mais ce sont deux hypothèses différentes : préciser laquelle on vérifie. (Variante hors poly : $|f-g|<|f|+|g|$ sur $\Gamma$ suffit encore, car alors $h(\Gamma)$ évite la demi-droite $]-\infty,0]$, et $\C\setminus\R_-$ est étoilé.)
* Pour un ouvert $U$ qui n'est pas « bord d'un lacet » (couronne), appliquer Rouché sur deux disques et soustraire, comme dans le premier exemple.
