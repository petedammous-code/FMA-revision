---
id: ch04-joukovski
type: proposition
chapter: 4
title: "Transformation de Joukovski $J(z) = \\tfrac12(z+1/z)$ : écoulement autour d'un disque et profils d'ailes"
ref: "non numéroté, section IV.4.1, p. 83 (transformation de Joukovski)"
page: 83
importance: 2
depends: [ch04-ecoulement-potentiel, ch04-composition-harmonique-holomorphe, ch04-reduction-demi-plan, ch01-bijection-holomorphe-reciproque-holomorphe, ch02-logarithme-determination-principale-def, ch04-holomorphe-conserve-angles, ch04-holomorphe-implique-harmonique]
tags: [joukovski, conforme, ecoulement, aile, ellipse, plaque, neumann]
---
## Intuition

> 💡 La transformation de Joukovski $J(z)=\tfrac12\big(z+\tfrac1z\big)$ « écrase » le cercle unité sur le segment $[-1,1]$ : le point $e^{i\theta}$ et son conjugué $e^{-i\theta}$ tombent tous deux sur $\cos\theta$. Les cercles $|z|=R$ avec $R>1$ deviennent des ellipses de foyers $\pm1$, de plus en plus rondes quand $R$ grandit (loin de l'origine, $J(z)\approx z/2$ : presque une homothétie). Image mentale : on regarde le plan $|z|>1$ par un objectif qui ne déforme presque rien au loin, mais qui aplatit le disque unité en une lame.

Pourquoi un aérodynamicien s'y intéresse : l'écoulement d'un fluide parfait autour d'un **obstacle** est décrit par un potentiel des vitesses harmonique dont la dérivée normale est nulle sur l'obstacle ([[ch04-ecoulement-potentiel]]). Un écoulement uniforme « glisse » le long d'une plaque placée dans sa direction ; en composant par $J$, qui échange plaque et disque, on obtient l'écoulement autour du disque ([[ch04-reduction-demi-plan]], ici le domaine modèle est le plan fendu $\C\setminus[-1,1]$ plutôt que $H$). En déplaçant légèrement le centre du cercle, son image par $J$ devient un **profil d'aile** (pointu au bord de fuite, arrondi au bord d'attaque) : les formules pour le disque donnent gratuitement l'écoulement autour de l'aile.

Les notions utilisées : fonction harmonique ([[ch04-harmonique-def]]), composée harmonique $\circ$ holomorphe ([[ch04-composition-harmonique-holomorphe]]), application biholomorphe (bijection holomorphe à réciproque holomorphe, [[ch01-bijection-holomorphe-reciproque-holomorphe]]), détermination principale de la racine carrée $\sqrt w=e^{\frac12\mathrm{Log}\,w}$ sur $\C\setminus\,]-\infty,0]$ ([[ch02-logarithme-determination-principale-def]]).

## Énoncé

**Proposition (poly, section IV.4.1, p. 83–84, et Exercice IV.4.1, p. 84–85).** La **transformation de Joukovski** (1910) est l'application holomorphe sur $\C^\times$
$$
f(z):=\frac12\Big(z+\frac1z\Big).
$$

1. L'image par $f$ du cercle $C_1$ de centre $0$ et de rayon $1$ est le segment $[-1,1]$ de $\C$, parcouru deux fois : $f(e^{i\theta})=\cos\theta$.
2. $f(z)=f(1/z)$ pour tout $z\in\C^\times$ ; $f'(z)=\tfrac12\big(1-\tfrac1{z^2}\big)$ s'annule exactement en $z=\pm1$. La restriction de $f$ à l'extérieur du disque unité $\{|z|>1\}$ est une application biholomorphe sur l'extérieur de la plaque $\C\setminus[-1,1]$, de réciproque
$$
z(w)=w+\sqrt{w^2-1},
$$
où $\sqrt{w^2-1}$ désigne l'unique détermination holomorphe sur $\C\setminus[-1,1]$ équivalente à $w$ à l'infini.
3. Pour $R>1$, l'image de $C_R=C(0,R)$ est l'ellipse de centre $0$, de demi-grand axe $\tfrac12(R+\tfrac1R)$ sur l'axe réel, de demi-petit axe $\tfrac12(R-\tfrac1R)$, et de foyers $\pm1$.
4. (Écoulement autour du disque.) Le potentiel des vitesses d'un écoulement plan uniforme $\vec v\equiv\vec v_0$ dans la direction de l'axe des $x$ étant $\Phi_0(w)=\lambda\,\Re(w)$ ($\lambda\in\R$), la fonction
$$
\Phi(z)=\lambda\,\Re\big(f(z)\big)=\frac\lambda2\Big(r+\frac1r\Big)\cos\theta\qquad(z=re^{i\theta},\ r>1)
$$
est le potentiel des vitesses d'un écoulement plan autour du disque unité centré à l'origine : elle est harmonique sur $\{|z|>1\}$, sa dérivée normale est nulle sur $C_1$, et sa vitesse $\nabla\Phi$ tend vers $(\lambda/2,0)$ à l'infini.
5. En étudiant les images par $f$ des cercles non centrés à l'origine (passant par $1$), on obtient des profils qui ressemblent à des profils d'ailes d'avion, ce qui permet en première approximation de calculer des écoulements plans autour de ce profil et d'estimer la portance.

> ⚠️ **Coquille du poly (p. 84).** Le poly écrit « $\Phi(z)=\lambda\,\Re e(f^{-1}(z))$ » pour le potentiel autour du disque. Avec la convention du paragraphe ($\Phi=\Phi_0\circ h$, $h$ allant du domaine physique vers le domaine modèle, ici $h=f:\{|z|>1\}\to\C\setminus[-1,1]$), c'est $\Phi=\lambda\,\Re(f(z))$, et c'est cohérent avec l'Exercice IV.4.1 ($F(z)=V_0(z+1/z)=2V_0f(z)$ pour $\alpha=0$), où c'est le potentiel autour de la **plaque** qui s'obtient par $G=F\circ f^{-1}$. La fonction $\lambda\Re(f^{-1}(w))$, définie sur $\C\setminus[-1,1]$, n'est le potentiel d'aucun des deux écoulements : sa dérivée normale n'est nulle ni sur la plaque $[-1,1]$, ni sur le cercle unité (Exemple 3).

## Hypothèses

### H1 — $z\in\C^\times$

**Rôle.** $f$ a un pôle simple en $0$ ; elle est holomorphe sur $\C^\times$ et toutes les formules ($f'$, $f(1/z)$) supposent $z\neq0$.

**Si on la retire.** $f(z)\to\infty$ quand $z\to0$ : aucune valeur ne prolonge $f$ en $0$. (Sur la sphère de Riemann, $f$ envoie $0$ et $\infty$ sur $\infty$, ce qui est une autre façon de dire que $f$ n'est pas injective.)

### H2 — Restriction à $|z|>1$ pour la bijectivité

**Rôle.** Comme $f(z)=f(1/z)$, $f$ identifie l'intérieur et l'extérieur du disque unité ; pour avoir une bijection il faut choisir l'un des deux. La preuve utilise $|zz'|>1$ pour exclure le cas $zz'=1$.

**Si on la retire.** $f(2)=\tfrac12(2+\tfrac12)=\tfrac54=f(\tfrac12)$ : $f$ n'est pas injective sur $\C^\times$. De plus, sur le cercle $|z|=1$ lui-même, $f'(\pm1)=0$ et $f$ n'est pas conforme en $\pm1$ : les angles y sont doublés ([[ch04-holomorphe-conserve-angles]], pièges), c'est ce qui permet au cercle lisse de se replier en un segment (angle $\pi$ en $1$ sur le cercle, angle $2\pi$ au bout du segment). On peut aussi bien restreindre $f$ au disque épointé $\{0<|z|<1\}$ : c'est encore une bijection sur $\C\setminus[-1,1]$, de réciproque $w-\sqrt{w^2-1}=1/z(w)$.

### H3 — $R>1$ pour l'ellipse

**Rôle.** Le demi-petit axe $\tfrac12(R-\tfrac1R)$ doit être strictement positif.

**Si on la retire.** Pour $R=1$ l'ellipse dégénère en le segment $[-1,1]$ (point 1). Pour $R<1$ on obtient l'ellipse associée à $1/R>1$ (car $f(C_R)=f(C_{1/R})$ par H2), parcourue dans l'autre sens.

### H4 — Écoulement uniforme parallèle à la plaque

**Rôle.** Dans le point 4, le domaine modèle est le plan fendu $\C\setminus[-1,1]$ et la solution modèle $\Phi_0=\lambda\Re(w)$ ; la plaque est une ligne de courant de l'écoulement uniforme horizontal ($\partial_y\Phi_0=0$ partout), donc la condition de Neumann est satisfaite sur la plaque et se transporte au disque par $f$ ([[ch04-reduction-demi-plan]], point 3).

**Si on la retire.** Avec un écoulement uniforme incliné d'un angle $\alpha\neq0$, $\Phi_0(w)=\lambda\Re(e^{-i\alpha}w)$ traverse la plaque ($\partial_y\Phi_0=\lambda\sin\alpha\neq0$) ; le bon potentiel autour du disque est alors $\Re F$ avec $F(z)=V_0(ze^{-i\alpha}+e^{i\alpha}/z)$ (Exercice IV.4.1), qui n'est plus $\Phi_0\circ f$. On vérifie : $ze^{-i\alpha}=re^{i(\theta-\alpha)}$ et $e^{i\alpha}/z=\tfrac1re^{-i(\theta-\alpha)}$, donc $\Re F(re^{i\theta})=V_0\big(r+\tfrac1r\big)\cos(\theta-\alpha)$, de dérivée radiale $V_0\big(1-\tfrac1{r^2}\big)\cos(\theta-\alpha)=0$ sur $r=1$.

## Idée de la preuve

Tout est calcul : $f(e^{i\theta})=\cos\theta$ ; l'équation $f(z)=w$ est $z^2-2wz+1=0$, dont les deux racines ont pour produit $1$, de sorte qu'exactement une est de module $>1$ dès que $w\notin[-1,1]$ ; $f(Re^{i\theta})$ s'écrit $a\cos\theta+ib\sin\theta$. Pour l'écoulement, $\Phi=\Phi_0\circ f$ est harmonique par composition et $\partial_r\Phi=\tfrac\lambda2(1-\tfrac1{r^2})\cos\theta$ s'annule sur $r=1$.

## Preuve

*Le poly énonce ces faits sans démonstration (« on vérifie que... ») ; voici les vérifications complètes.*

**Point 1.** Pour $\theta\in\R$, $\dfrac1{e^{i\theta}}=e^{-i\theta}$, donc $f(e^{i\theta})=\tfrac12(e^{i\theta}+e^{-i\theta})=\cos\theta$. Quand $\theta$ parcourt $[0,2\pi]$, $\cos\theta$ décrit $[-1,1]$ de $1$ à $-1$ (pour $\theta\in[0,\pi]$) puis de $-1$ à $1$ (pour $\theta\in[\pi,2\pi]$) : le segment est parcouru deux fois, et $f(C_1)=[-1,1]$.

**Point 2.** *(a)* $f(1/z)=\tfrac12(\tfrac1z+z)=f(z)$. *(b)* $f'(z)=\tfrac12(1-z^{-2})$, nul si et seulement si $z^2=1$, i.e. $z=\pm1$.

*(c) $f$ envoie $\{|z|>1\}$ dans $\C\setminus[-1,1]$.* Soit $|z|>1$ et supposons $f(z)=w\in[-1,1]$. Alors $w=\cos\theta$ pour un $\theta\in\R$, et $z$ est racine de $z^2-2wz+1=z^2-2\cos\theta\,z+1=(z-e^{i\theta})(z-e^{-i\theta})$, donc $|z|=1$ : contradiction.

*(d) Injectivité sur $\{|z|>1\}$.* Si $f(z)=f(z')$ avec $|z|,|z'|>1$, alors $z-z'+\tfrac1z-\tfrac1{z'}=0$, soit $(z-z')\big(1-\tfrac1{zz'}\big)=0$. Comme $|zz'|>1$, le second facteur est non nul, donc $z=z'$.

*(e) Surjectivité sur $\C\setminus[-1,1]$ et formule de la réciproque.* Soit $w\in\C\setminus[-1,1]$. L'équation $f(z)=w$ équivaut (pour $z\neq0$) à $z^2-2wz+1=0$. Ce trinôme a deux racines $z_1,z_2\in\C^\times$ (non nulles car leur produit vaut $1$), avec $z_1z_2=1$, donc $|z_1|\,|z_2|=1$. Aucune n'est de module $1$ : si $|z_1|=1$, alors $z_1=e^{i\theta}$ et $w=f(z_1)=\cos\theta\in[-1,1]$, exclu. Donc l'une des racines est de module $>1$ et l'autre de module $<1$ : il existe exactement un $z$ avec $|z|>1$ et $f(z)=w$.

Pour l'expression explicite, construisons une racine carrée holomorphe de $w^2-1$ sur $U:=\C\setminus[-1,1]$. L'homographie $\varphi(w)=\dfrac{w-1}{w+1}$ est holomorphe sur $U$ et ne prend pas de valeur dans $]-\infty,0]$ : si $\varphi(w)=-t$ avec $t\ge0$, alors $w-1=-t(w+1)$, soit $w=\dfrac{1-t}{1+t}\in\,]-1,1]$, exclu. La détermination principale $\sqrt{\cdot}=e^{\frac12\mathrm{Log}(\cdot)}$ est holomorphe sur $\C\setminus\,]-\infty,0]$ ([[ch02-logarithme-determination-principale-def]]), donc
$$
s(w):=(w+1)\sqrt{\varphi(w)}
$$
est holomorphe sur $U$ et vérifie $s(w)^2=(w+1)^2\varphi(w)=w^2-1$. Pour $w$ réel tendant vers $+\infty$, $\varphi(w)\to1$ et $\sqrt{\varphi(w)}\to1$, donc $s(w)\sim w$ : $s$ est la détermination « équivalente à $w$ à l'infini » (l'autre détermination continue sur $U$ connexe est $-s$ : si $s_1^2=s^2$ alors $(s_1/s)^2=1$ et $s_1/s$, continue à valeurs dans $\{\pm1\}$ sur un connexe, est constante). Posons $z(w):=w+s(w)$ ; comme $(w+s)(w-s)=w^2-s^2=1$, les deux racines du trinôme sont $z(w)$ et $1/z(w)$. Enfin $|z(w)|>1$ sur tout $U$ : la fonction continue $w\mapsto|z(w)|$ ne prend jamais la valeur $1$ sur $U$ (point précédent), $U$ est connexe (complémentaire d'un segment : deux points de $U$ se joignent par un chemin évitant le segment), et $|z(w)|\sim2|w|\to+\infty$ quand $w\to+\infty$ ; par le théorème des valeurs intermédiaires le long d'un chemin, $|z(w)|>1$ partout. Ainsi $f^{-1}(w)=w+\sqrt{w^2-1}$ avec cette détermination.

*(f) Biholomorphie.* $f$ est holomorphe et bijective de $\{|z|>1\}$ sur $U$ ; sa réciproque est holomorphe (formule explicite ci-dessus, ou [[ch01-bijection-holomorphe-reciproque-holomorphe]]).

**Point 3.** Pour $R>1$ et $\theta\in\R$,
$$
f(Re^{i\theta})=\frac12\Big(Re^{i\theta}+\frac1Re^{-i\theta}\Big)=\underbrace{\frac12\Big(R+\frac1R\Big)}_{=:a}\cos\theta+i\,\underbrace{\frac12\Big(R-\frac1R\Big)}_{=:b}\sin\theta ,
$$
avec $a>b>0$. C'est le paramétrage $\theta\mapsto a\cos\theta+ib\sin\theta$ de l'ellipse $\dfrac{u^2}{a^2}+\dfrac{v^2}{b^2}=1$ (où $w=u+iv$), parcourue une fois dans le sens direct. Ses foyers sont $\pm c$ avec $c^2=a^2-b^2=\tfrac14\big[(R+\tfrac1R)^2-(R-\tfrac1R)^2\big]=\tfrac14\cdot4=1$ : foyers $\pm1$, indépendants de $R$ (ellipses **homofocales**).

**Point 4.** $\Phi_0(w)=\lambda\Re(w)$ est harmonique sur $\C$ (partie réelle de $w\mapsto\lambda w$, [[ch04-holomorphe-implique-harmonique]]) et $f$ est holomorphe sur $\{|z|>1\}$, donc $\Phi=\Phi_0\circ f=\lambda\Re(f)$ est harmonique sur $\{|z|>1\}$ ([[ch04-composition-harmonique-holomorphe]]). En polaires, $z=re^{i\theta}$ :
$$
f(z)=\frac12\Big(re^{i\theta}+\frac1re^{-i\theta}\Big)\quad\Longrightarrow\quad\Phi(z)=\frac\lambda2\Big(r+\frac1r\Big)\cos\theta,\qquad \frac{\partial\Phi}{\partial r}=\frac\lambda2\Big(1-\frac1{r^2}\Big)\cos\theta .
$$
Sur $C_1$ ($r=1$) la normale est radiale et $\partial_n\Phi=\partial_r\Phi=0$ : le disque est étanche (de façon équivalente, $\Im f=\tfrac12(r-\tfrac1r)\sin\theta=0$ sur $C_1$ : le cercle est une ligne de niveau de la fonction de courant $\Psi=\lambda\Im f$, donc une ligne de courant). Vitesse : par la formule du gradient composé ([[ch04-reduction-demi-plan]], preuve), $\nabla\Phi(z)=\overline{f'(z)}\,\nabla\Phi_0(f(z))=\overline{f'(z)}\,\lambda=\tfrac\lambda2\big(1-\bar z^{-2}\big)\to\tfrac\lambda2$ quand $|z|\to\infty$, soit $\vec v\to(\lambda/2,0)$. (Pour une vitesse $V_0$ à l'infini, prendre $2V_0f=V_0(z+1/z)$ : c'est le $F$ de l'Exercice IV.4.1 avec $\alpha=0$.)

**Point 5.** C'est une description qualitative (voir l'Exemple 2) : un cercle passant par $1$ a une image présentant une pointe en $f(1)=1$, car $f'(1)=0$ y double les angles. $\square$

## Preuve à trous

**Image de $C_1$.** $f(e^{i\theta})=$ <trou indice="$1/e^{i\theta}=e^{-i\theta}$">$\tfrac12(e^{i\theta}+e^{-i\theta})=\cos\theta$</trou>, qui décrit deux fois $[-1,1]$ quand $\theta\in[0,2\pi]$.

**Bijectivité sur $|z|>1$.** L'équation $f(z)=w$ équivaut à <trou indice="multiplier par $2z$">$z^2-2wz+1=0$</trou>, dont les deux racines ont pour produit $1$ ; aucune n'est de module $1$ si $w\notin[-1,1]$, car <trou indice="que vaut $f$ sur le cercle unité ?">une racine $e^{i\theta}$ donnerait $w=f(e^{i\theta})=\cos\theta\in[-1,1]$</trou>. Donc exactement une racine est de module $>1$ : $f$ est bijective de $\{|z|>1\}$ sur $\C\setminus[-1,1]$. Réciproque : $z(w)=w+\sqrt{w^2-1}$, où la racine est construite par <trou indice="se ramener à la détermination principale via une homographie">$\sqrt{w^2-1}:=(w+1)\sqrt{\tfrac{w-1}{w+1}}$, l'homographie $\tfrac{w-1}{w+1}$ évitant $]-\infty,0]$ sur $\C\setminus[-1,1]$</trou>.

**Ellipses.** $f(Re^{i\theta})=\tfrac12(R+\tfrac1R)\cos\theta+\tfrac i2(R-\tfrac1R)\sin\theta$ : ellipse de demi-axes $a,b$ et de foyers $\pm\sqrt{a^2-b^2}=$ <trou>$\pm1$, car $a^2-b^2=\tfrac14[(R+\tfrac1R)^2-(R-\tfrac1R)^2]=1$</trou>.

**Écoulement.** $\Phi=\lambda\Re f$ est harmonique (composée harmonique $\circ$ holomorphe) et, en polaires, $\Phi=\tfrac\lambda2(r+\tfrac1r)\cos\theta$, donc <trou indice="normale radiale sur le cercle">$\partial_r\Phi=\tfrac\lambda2(1-\tfrac1{r^2})\cos\theta=0$ sur $r=1$ : condition de Neumann</trou>. $\square$

## Exemples

* **Quelques valeurs.** $f(2)=f(1/2)=5/4$ ; $f(2i)=\tfrac12\big(2i+\tfrac1{2i}\big)=\tfrac12\big(2i-\tfrac i2\big)=\tfrac34i$ ; $f(i)=\tfrac12(i-i)=0$ et $f(-i)=0$ : le point $0$, milieu de la plaque, est l'image des deux points $\pm i$ du cercle. L'image de $C_2$ est l'ellipse de demi-axes $a=5/4$, $b=3/4$ ; on vérifie $a^2-b^2=\tfrac{25-9}{16}=1$.
* **Un profil de Joukovski symétrique.** Prenons le cercle $\Gamma$ de centre $c=-0{,}1$ et de rayon $1{,}1$ : il passe par $1$ et contient $C_1$ dans son intérieur. Quelques images : $f(1)=1$ (bord de fuite, pointe car $f'(1)=0$) ; $f(-1{,}2)=\tfrac12\big(-1{,}2-\tfrac1{1{,}2}\big)=\tfrac12(-1{,}2-0{,}8333)\simeq-1{,}017$ (bord d'attaque, arrondi car $f'(-1{,}2)\neq0$) ; le point haut $-0{,}1+1{,}1i$ a pour inverse $\dfrac{-0{,}1-1{,}1i}{1{,}22}\simeq-0{,}082-0{,}902i$, d'où $f(-0{,}1+1{,}1i)\simeq\tfrac12(-0{,}182+0{,}198i)\simeq-0{,}091+0{,}099i$. Le profil est symétrique par rapport à l'axe réel ($f(\bar z)=\overline{f(z)}$ et $\Gamma$ est symétrique), long d'environ $2{,}02$ et épais d'environ $0{,}2$ : une aile mince. L'extérieur (ouvert) de $\Gamma$ est contenu dans $\{|z|>1\}$ (le disque fermé $\bar D(0,1)$ est inclus dans $\bar D(-0{,}1;1{,}1)$, les deux cercles se touchant en $1$), donc $f$ y est injective et holomorphe : elle réalise une application biholomorphe de l'extérieur de $\Gamma$ sur son image, l'extérieur du profil, et l'écoulement autour du profil s'obtient de l'écoulement autour de $\Gamma$ par $G=F\circ f^{-1}$, exactement comme pour la plaque.
* **Vérification de la coquille.** Posons $g(w)=f^{-1}(w)=w+\sqrt{w^2-1}$ sur $\C\setminus[-1,1]$ et $\Psi=\lambda\Re(g)$. Pour une fonction holomorphe $g$, $\partial_y\Re(g)=\Re(i\,g')=-\Im(g')$, et $g'(w)=1+\dfrac{w}{\sqrt{w^2-1}}$. En un point de la plaque approché par le dessus, $w=x+i0$ avec $|x|<1$ : $w^2-1=x^2-1<0$ et $\sqrt{w^2-1}\to i\sqrt{1-x^2}$ (limite de la détermination choisie par le demi-plan supérieur ; par le dessous on obtient $-i\sqrt{1-x^2}$), de sorte que $\dfrac{w}{\sqrt{w^2-1}}\to\dfrac{x}{i\sqrt{1-x^2}}=-i\dfrac{x}{\sqrt{1-x^2}}$ et $\partial_y\Psi\to\lambda\dfrac{x}{\sqrt{1-x^2}}\neq0$ pour $x\neq0$ (par exemple $x=\tfrac12$ : $\lambda/\sqrt3$). Le fluide décrit par $\Psi$ **traverserait** la plaque : $\Psi$ n'est pas le potentiel de l'écoulement autour de la plaque (qui, pour $\alpha=0$, est simplement $\lambda\Re(w)$, la plaque étant déjà une ligne de courant). Ce n'est pas non plus celui autour du disque : $\Psi$ est certes définie et harmonique sur $\{|z|>1\}\subset\C\setminus[-1,1]$, mais sa dérivée radiale sur $C_1$ n'est pas nulle. En effet $\partial_r\Re(g)(e^{i\theta})=\Re\big(e^{i\theta}g'(e^{i\theta})\big)$ et, pour $0<\theta<\pi$, $g'(e^{i\theta})=1+\dfrac{e^{i\theta}}{\sqrt{e^{2i\theta}-1}}$ avec $e^{2i\theta}-1=2\sin\theta\,e^{i(\theta+\pi/2)}$, dont la racine (branche équivalente à $z$ à l'infini, prolongée par continuité au cercle depuis $|z|>1$) vaut $\sqrt{2\sin\theta}\,e^{i(\theta/2+\pi/4)}$ ; d'où $\partial_r\Re(g)(e^{i\theta})=\cos\theta+\dfrac{\cos(3\theta/2-\pi/4)}{\sqrt{2\sin\theta}}$, par exemple $\simeq2{,}18$ pour $\theta=0{,}3$ et $\simeq1{,}12$ pour $\theta=1$ (vérifié numériquement) : le disque ne serait pas étanche.

## Pièges

* > ⚠️ $f$ n'est **pas** injective sur $\C^\times$ : $f(z)=f(1/z)$. Toujours préciser « sur $|z|>1$ » (ou « sur $0<|z|<1$ ») avant de parler de $f^{-1}$.
* > ⚠️ La formule $f^{-1}(w)=w+\sqrt{w^2-1}$ n'a de sens qu'avec une détermination de la racine **sur le plan fendu** $\C\setminus[-1,1]$, qui n'est pas la détermination principale de $\sqrt{w^2-1}$ (celle-ci serait discontinue sur $\{w^2-1\in\,]-\infty,0]\}=i\R\cup[-1,1]$). L'écrire « $w+\sqrt{w^2-1}$ avec la racine principale » est faux sur l'axe imaginaire.
* Sens de la composition : $f$ va du disque (domaine physique) vers la plaque (domaine modèle), et le potentiel autour du disque est $\Phi_0\circ f$, pas $\Phi_0\circ f^{-1}$ (coquille p. 84). Le potentiel autour de la **plaque** se déduit de celui autour du disque par $F\circ f^{-1}$ (Exercice IV.4.1).
* $f'(\pm1)=0$ : $f$ n'est pas conforme en $\pm1$ (angles doublés), ce qui explique à la fois le repliement du cercle en segment et la pointe des profils d'aile ; aux extrémités de la plaque, la vitesse de l'écoulement incliné diverge (Exercice IV.4.1, q. 5).
* Normalisation : $\lambda\Re f\sim\tfrac\lambda2\Re z$ à l'infini, donc la vitesse à l'infini est $\lambda/2$ et non $\lambda$. Pour une vitesse $V_0$, utiliser $V_0(z+1/z)$.
* Les ellipses $f(C_R)$ ont toutes les **mêmes foyers** $\pm1$ ; elles ne sont pas homothétiques entre elles (le rapport $b/a=\tfrac{R^2-1}{R^2+1}$ dépend de $R$).
