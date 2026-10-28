---
id: ch03-riemann-sigma-non-vide
type: lemma
chapter: 3
title: "Étape 1 de la preuve de Riemann : la famille $\Sigma$ n'est pas vide (racine carrée holomorphe injective)"
ref: non numéroté, preuve du Théorème III.4.1, p. 66
page: 66
importance: 2
depends: [ch02-logarithme-existence, ch01-application-ouverte, ch01-principe-maximum, ch01-automorphismes-disque]
tags: [riemann, racine-carree, logarithme, injectivite, homographie, principe-maximum]
---
## Intuition

> 💡 On veut une fonction holomorphe **injective** de $\Omega$ dans le disque unité $\mathbb D$. Si $\Omega$ évite un point $\omega_0$, on « prend la racine carrée » de $z-\omega_0$ : la racine carrée $\varphi$ replie le plan en deux, si bien que l'image $\varphi(\Omega)$ et son opposée $-\varphi(\Omega)$ ne se rencontrent pas. Comme $\varphi(\Omega)$ est ouverte, elle contient un petit disque $D(a,r)$, donc $\varphi(\Omega)$ **évite tout le disque** $D(-a,r)$. Une homographie qui envoie l'extérieur de $D(-a,r)$ dans le disque unité termine le travail.

Le point clé est donc : « éviter un point » (ce que donne $\Omega\ne\C$) se transforme, grâce à la racine carrée, en « éviter un disque », ce qui suffit pour être ramené dans un domaine borné.

Notations : $\Hol(\Omega)$ = fonctions holomorphes sur $\Omega$ ; $f_a(z)=\dfrac{z-a}{1-\bar az}$ ($a\in\mathbb D$) est un automorphisme de $\mathbb D$ envoyant $a$ sur $0$ ([[ch01-automorphismes-disque]]) ; **simplement connexe** : connexe et tout lacet est homotope à un lacet constant ([[ch02-homotopie-simplement-connexe]]).

## Énoncé

**Lemme (poly, preuve du Théorème III.4.1, p. 66).** Soient $\Omega$ un ouvert connexe et simplement connexe de $\C$, distinct de $\C$, et
$$
\Sigma=\{f\in\Hol(\Omega):\ f(\Omega)\subset\mathbb D,\ \text{et } f \text{ est injective}\}.
$$
Alors $\Sigma\ne\emptyset$. Plus précisément, pour tout $z_0\in\Omega$, l'ensemble $\Sigma_{z_0}=\{f\in\Sigma\mid f(z_0)=0\}$ est non vide.

## Hypothèses

### H1 — $\Omega$ simplement connexe

**Rôle.** Avec la non-annulation de $z-\omega_0$, elle donne (Proposition II.9.3, [[ch02-logarithme-existence]]) un logarithme holomorphe $u$ de $z-\omega_0$, donc une racine carrée holomorphe $\varphi=e^{u/2}$.

**Si on la retire.** Sur $\Omega=\C^\times=\C\setminus\{0\}$ (connexe, $\ne\C$, non simplement connexe), la conclusion est **fausse** : si $f:\C^\times\to\mathbb D$ est holomorphe, elle est bornée au voisinage de $0$, donc $0$ est une singularité effaçable ([[ch02-singularite-effacable-riemann]]) ; le prolongement est une fonction entière, bornée par $1$, donc constante (Liouville, [[ch01-liouville]]) ; $f$ n'est pas injective et $\Sigma=\emptyset$. La construction échoue d'ailleurs dès le départ : il n'existe pas de $\varphi\in\Hol(\C^\times)$ avec $\varphi(z)^2=z$, car on aurait $2\varphi\varphi'=1$, donc $\frac{\varphi'}{\varphi}=\frac1{2z}$ et $\int_{C(0,1)}\frac{\varphi'}{\varphi}\,dz=i\pi$, alors que cette intégrale vaut $2i\pi\,\Ind_{\varphi\circ\gamma}(0)\in2i\pi\Z$ ($\gamma$ le cercle unité, [[ch02-indice-def]]).

Attention : l'hypothèse est suffisante, pas nécessaire. Pour la couronne $\{1<|z|<2\}$, non simplement connexe, $z\mapsto z/2$ est dans $\Sigma$.

### H2 — $\Omega\ne\C$

**Rôle.** Elle fournit le point $\omega_0\in\C\setminus\Omega$, donc une fonction $z-\omega_0$ qui ne s'annule pas sur $\Omega$.

**Si on la retire.** Pour $\Omega=\C$, $\Sigma=\emptyset$ : une $f\in\Hol(\C)$ à valeurs dans $\mathbb D$ est bornée, donc constante par Liouville, donc pas injective.

### H3 — $\Omega$ connexe

**Rôle.** Le théorème de l'application ouverte ([[ch01-application-ouverte]]) et le principe du maximum ([[ch01-principe-maximum]]) sont énoncés sur un ouvert connexe : ils servent à trouver $D(a,r)\subset\varphi(\Omega)$ et à passer de $|\psi|\le1$ à $|\psi|<1$. (Dans le poly, la connexité est incluse dans « simplement connexe ».)

**Si on la retire.** La conclusion survit dans des cas simples mais la preuve doit être adaptée composante par composante : pour $\Omega=D(0,1)\cup D(3,1)$, la fonction égale à $z/4$ sur $D(0,1)$ et à $\frac{z-3}{4}+\frac34$ sur $D(3,1)$ est holomorphe, injective (images $D(0,\frac14)$ et $D(\frac34,\frac14)$ disjointes, chacune injective) et à valeurs dans $\mathbb D$. C'est donc ici une hypothèse de confort, mais indispensable pour le théorème de Riemann lui-même.

## Idée de la preuve

$\varphi=\sqrt{z-\omega_0}$ (via un logarithme) est injective et $\varphi(\Omega)\cap(-\varphi(\Omega))=\emptyset$. Par l'application ouverte, $D(a,r)\subset\varphi(\Omega)$, donc $\varphi(\Omega)$ évite $D(-a,r)$ et $\psi=r/(\varphi+a)$ est injective, de module $\le1$, puis $<1$ par le principe du maximum. On recentre avec $f_{\psi(z_0)}$.

## Preuve

Soit $\omega_0\in\C\setminus\Omega$ (H2). Comme $\Omega$ est simplement connexe et $z-\omega_0\ne0$ pour tout $z\in\Omega$, la Proposition II.9.3 ([[ch02-logarithme-existence]]) donne $u\in\Hol(\Omega)$ telle que $\exp(u(z))=z-\omega_0$ pour tout $z\in\Omega$. Posons $\varphi:=\exp(u/2)\in\Hol(\Omega)$ ; alors $\varphi(z)^2=\exp(u(z))=z-\omega_0$.

*$\varphi$ est injective.* Si $\varphi(z)=\varphi(z')$, alors $\varphi(z)^2=\varphi(z')^2$, i.e. $z-\omega_0=z'-\omega_0$, donc $z=z'$.

*$\varphi(\Omega)$ et $-\varphi(\Omega)$ sont disjoints.* Si $\varphi(z)=-\varphi(z')$, on a de la même manière $\varphi(z)^2=\varphi(z')^2$, donc $z=z'$, puis $\varphi(z)=-\varphi(z)$, i.e. $\varphi(z)=0$ : impossible, car $\varphi(z)^2=z-\omega_0\ne0$.

*Un disque évité.* Soit $a\in\varphi(\Omega)$ ; $a\ne0$. La fonction $\varphi$ est injective, donc non constante, sur l'ouvert connexe $\Omega$ : par le théorème de l'application ouverte ([[ch01-application-ouverte]]), $\varphi(\Omega)$ est ouvert, donc il existe $r$ avec $0<r<|a|$ et $D(a,r)\subset\varphi(\Omega)$. Alors $D(-a,r)\cap\varphi(\Omega)=\emptyset$ : si $\varphi(z)\in D(-a,r)$, alors $-\varphi(z)\in D(a,r)\subset\varphi(\Omega)$, soit $-\varphi(z)=\varphi(z')$ pour un $z'\in\Omega$, ce qu'on vient d'exclure.

*La fonction $\psi$.* Pour tout $z\in\Omega$, $\varphi(z)\notin D(-a,r)$, c'est-à-dire $|\varphi(z)+a|\ge r>0$. Donc
$$
\psi:=\frac{r}{\varphi+a}
$$
est holomorphe sur $\Omega$ et $|\psi(z)|\le1$ pour tout $z\in\Omega$. De plus $\psi$ est injective, comme composée de l'application injective $\varphi$ et de l'homographie injective $w\mapsto\frac{r}{w+a}$. En particulier $\psi$ est non constante, et le principe du maximum ([[ch01-principe-maximum]]) sur le connexe $\Omega$ interdit que $|\psi|$ atteigne la valeur $1$ (ce serait un maximum de $|\psi|$, local et même global) : $\psi(\Omega)\subset\mathbb D$, c'est-à-dire $\psi\in\Sigma$. On a montré $\Sigma\ne\emptyset$.

*Normalisation.* Soit $z_0\in\Omega$ et $b:=\psi(z_0)\in\mathbb D$. L'application $f_b$ est une bijection holomorphe de $\mathbb D$ sur $\mathbb D$ avec $f_b(b)=0$ ([[ch01-automorphismes-disque]]). Donc $f_b\circ\psi$ est holomorphe, injective (composée d'injections), à valeurs dans $\mathbb D$, et s'annule en $z_0$ : $f_b\circ\psi\in\Sigma_{z_0}$. $\square$

## Preuve à trous

Soit $\omega_0\notin\Omega$. Par la Proposition II.9.3, il existe $u\in\Hol(\Omega)$ avec $e^u=z-\omega_0$ ; on pose <trou indice="une racine carrée à partir d'un logarithme">$\varphi:=e^{u/2}$, de sorte que $\varphi(z)^2=z-\omega_0$</trou>. Si $\varphi(z)=\pm\varphi(z')$, en élevant au carré $z=z'$ ; donc $\varphi$ est injective et <trou>$\varphi(\Omega)\cap(-\varphi(\Omega))=\emptyset$ (sinon $\varphi(z)=-\varphi(z)$, soit $\varphi(z)=0$, alors que $\varphi^2=z-\omega_0\ne0$)</trou>.

Soit $a\in\varphi(\Omega)$. Par <trou indice="φ est non constante sur un connexe">le théorème de l'application ouverte, il existe $D(a,r)\subset\varphi(\Omega)$ avec $0<r<|a|$, donc $D(-a,r)\cap\varphi(\Omega)=\emptyset$</trou>. On pose <trou indice="une homographie qui envoie le complémentaire de D(−a,r) dans le disque fermé">$\psi=\dfrac{r}{\varphi+a}$ : comme $|\varphi+a|\ge r$, on a $|\psi|\le1$</trou>. $\psi$ est injective donc non constante, et le principe du maximum donne $\psi(\Omega)\subset\mathbb D$ : $\psi\in\Sigma$. Enfin $f_{\psi(z_0)}\circ\psi\in\Sigma_{z_0}$. $\square$

## Exemples

* **Plan fendu.** $\Omega=\C\setminus\R_-$, $\omega_0=0$. On peut prendre $u=\mathrm{Log}$ (détermination principale, [[ch02-logarithme-determination-principale-def]]), donc $\varphi=\sqrt z$, d'image le demi-plan $P=\{\Re(w)>0\}$ ; $-P=\{\Re(w)<0\}$ est bien disjoint de $P$. Avec $a=1$ et $r=\frac12$ ($D(1,\frac12)\subset P$, $r<|a|$), $\psi(z)=\dfrac{1/2}{\sqrt z+1}$ ; comme $\Re(\sqrt z)>0$, $|\sqrt z+1|>1$ et même $|\psi|<\frac12$. Pour $z_0=1$ : $b=\psi(1)=\frac14$ et $f_{1/4}\circ\psi\in\Sigma_1$. Sa dérivée en $1$ : $\psi'(1)=-\frac12\cdot\frac{1}{2\sqrt1}\cdot\frac{1}{(\sqrt1+1)^2}=-\frac1{16}$ et $f_b'(b)=\frac{1}{1-|b|^2}=\frac{16}{15}$, donc $(f_{1/4}\circ\psi)'(1)=-\frac1{15}$. C'est bien plus petit que le maximum $\eta=\frac14$ calculé dans [[ch03-riemann-representation-conforme]] : la fonction construite est injective mais loin d'être surjective.
* **Demi-plan supérieur.** $\Omega=H=\{\Im(z)>0\}$, $\omega_0=0$ : $\varphi=\sqrt z$ (principale, car $H\subset\C\setminus\R_-$) envoie $H$ sur le quart de plan $Q=\{\Re(w)>0,\ \Im(w)>0\}$, et $-Q$ est le quart opposé. Avec $a=1+i$, $r=1$ : $D(1+i,1)\subset Q$, et $\psi=\dfrac{1}{\sqrt z+1+i}$ est dans $\Sigma$.

## Pièges

* > ⚠️ L'injectivité de $\varphi$ ne suffit pas : c'est la propriété $\varphi(\Omega)\cap(-\varphi(\Omega))=\emptyset$ qui donne un **disque évité**, donc la bornitude après homographie. Ne pas l'oublier dans la rédaction.
* L'existence de la racine carrée vient de la Proposition II.9.3 appliquée à $z-\omega_0$, qui **ne s'annule pas** sur $\Omega$ ; sur un ouvert non simplement connexe, elle peut ne pas exister ($\C^\times$).
* Le principe du maximum donne $|\psi|<1$ seulement parce que $\psi$ n'est **pas constante** (et $\Omega$ connexe) ; ici, c'est l'injectivité qui l'assure.
* $f_a(z)=\dfrac{z-a}{1-\bar az}$ (avec une **barre** sur $a$ : l'extraction du poly la perd parfois) ; $f_a(a)=0$ et $f_a^{-1}=f_{-a}$.
